import { PrismaClient } from "@prisma/client";
import readDepartment from "../department/readDepartment";
import readDepartmentApproval from "../department_approval/readDepartmentApproval";
import readFaculty from "../faculty/readFaculty";
import readIM from "../im/readIM";

export default async function createChairpersonApproval({
  departmentApprovalId,
  chairpersonId,
}) {
  const prisma = new PrismaClient();

  try {
    const chairperson = await findChairperson({
      departmentApprovalId,
      chairpersonId,
    });

    const chairpersonApproval = prisma.chairpersonApproval.create({
      data: {
        departmentApprovalId,
        chairpersonId: chairperson.id,
      },
    });

    return chairpersonApproval;
  } catch (error) {
    throw error;
  }
}

async function findChairperson({ departmentApprovalId, chairpersonId }) {
  const prisma = new PrismaClient();
  try {
    const departmentApproval = await readDepartmentApproval(
      departmentApprovalId
    );
    const iM = await readIM(departmentApproval.iMId);
    const faculty = await readFaculty(iM.ownerId);
    const department = await readDepartment(faculty.departmentId);

    const chairperson = await prisma.chairperson.findFirstOrThrow({
      where: {
        Faculty: {
          departmentId: department.id,
        },
        id: chairpersonId,
      },
    });

    return chairperson;
  } catch (error) {
    throw error;
  }
}
