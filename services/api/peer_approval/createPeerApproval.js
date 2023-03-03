import { PrismaClient } from "@prisma/client";
import readDepartment from "../department/readDepartment";
import readDepartmentApproval from "../department_approval/readDepartmentApproval";
import readFaculty from "../faculty/readFaculty";
import readIM from "../im/readIM";

export default async function createPeerApproval({
  departmentApprovalId,
  facultyId,
}) {
  const prisma = new PrismaClient();
  // TODO find peer from same department as the IMApproval

  try {
    const peer = await findPeer({
      departmentApprovalId,
      facultyId,
    });
    const peerApproval = await prisma.peerApproval.create({
      data: {
        departmentApprovalId,
        facultyId: peer.id,
      },
    });

    return peerApproval;
  } catch (error) {
    throw error;
  }
}

async function findPeer({ departmentApprovalId, facultyId }) {
  const prisma = new PrismaClient();
  try {
    const departmentApproval = await readDepartmentApproval(
      departmentApprovalId
    );
    const iM = await readIM(departmentApproval.iMId);
    const faculty = await readFaculty(iM.ownerId);
    const department = await readDepartment(faculty.departmentId);

    const chairperson = await prisma.faculty.findFirstOrThrow({
      where: {
        departmentId: department.id,
        department: {
          ActiveFaculty: {
            some: {
              facultyId: facultyId,
            },
          },
        },
        id: facultyId,
      },
    });

    return chairperson;
  } catch (error) {
    throw error;
  }
}
