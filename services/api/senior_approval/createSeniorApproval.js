import { PrismaClient } from "@prisma/client";
import readDepartment from "../department/readDepartment";
import readDepartmentApproval from "../department_approval/readDepartmentApproval";
import readFaculty from "../faculty/readFaculty";
import readIM from "../im/readIM";

export default async function createSeniorApproval({
  departmentApprovalId,
  seniorId,
}) {
  const prisma = new PrismaClient();

  try {
    const senior = await findSenior({ departmentApprovalId, seniorId });
    const seniorApproval = await prisma.seniorApproval.create({
      data: {
        departmentApprovalId,
        seniorId: senior.id,
      },
    });

    return seniorApproval;
  } catch (error) {
    throw error;
  }
}

async function findSenior({ departmentApprovalId, seniorId }) {
  const prisma = new PrismaClient();
  try {
    const departmentApproval = await readDepartmentApproval(
      departmentApprovalId
    );
    const iM = await readIM(departmentApproval.iMId);
    const faculty = await readFaculty(iM.ownerId);
    const department = await readDepartment(faculty.departmentId);

    const senior = await prisma.senior.findFirstOrThrow({
      where: {
        Faculty: {
          departmentId: department.id,
          department: {
            ActiveSenior: {
              some: {
                seniorId: seniorId,
              },
            },
          },
        },
        id: seniorId,
      },
    });

    return senior;
  } catch (error) {
    throw error;
  }
}
