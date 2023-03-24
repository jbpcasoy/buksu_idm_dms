import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import readDepartment from "../department/readDepartment";
import readDepartmentApproval from "../department_approval/readDepartmentApproval";
import readFaculty from "../faculty/readFaculty";
import readIM from "../im/readIM";

export default async function createCoordinatorApproval({
  departmentApprovalId,
  coordinatorId,
}) {
  const prisma = PRISMA_CLIENT;

  try {
    // TODO change to find department where coordinator is active coordinator
    const coordinator = await findCoordinator({
      departmentApprovalId,
      coordinatorId,
    });

    const coordinatorApproval = await prisma.coordinatorApproval.create({
      data: {
        coordinatorId: coordinator.id,
        departmentApprovalId,
      },
    });
    return coordinatorApproval;
  } catch (error) {
    throw error;
  }
}

async function findCoordinator({ departmentApprovalId, coordinatorId }) {
  const prisma = PRISMA_CLIENT;
  try {
    const departmentApproval = await readDepartmentApproval(
      departmentApprovalId
    );
    const iM = await readIM(departmentApproval.iMId);
    const faculty = await readFaculty(iM.ownerId);
    const department = await readDepartment(faculty.departmentId);

    const coordinator = await prisma.coordinator.findFirstOrThrow({
      where: {
        Faculty: {
          departmentId: department.id,
          department: {
            ActiveCoordinator: {
              coordinatorId: coordinatorId,
            },
          },
        },
        id: coordinatorId,
      },
    });

    return coordinator;
  } catch (error) {
    throw error;
  }
}
