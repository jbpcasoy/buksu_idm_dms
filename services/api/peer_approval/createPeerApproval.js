import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import readDepartment from "../department/readDepartment";
import readDepartmentApproval from "../department_approval/readDepartmentApproval";
import readFaculty from "../faculty/readFaculty";
import readIM from "../im/readIM";

export default async function createPeerApproval({
  departmentApprovalId,
  facultyId,
}) {
  const prisma = PRISMA_CLIENT;

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
}

async function findPeer({ departmentApprovalId, facultyId }) {
  const prisma = PRISMA_CLIENT;

  const departmentApproval = await readDepartmentApproval(departmentApprovalId);
  const iM = await readIM(departmentApproval.iMId);
  const faculty = await readFaculty(iM.ownerId);
  const department = await readDepartment(faculty.departmentId);

  const peer = await prisma.faculty.findFirstOrThrow({
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

  return peer;
}
