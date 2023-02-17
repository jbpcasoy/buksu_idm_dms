import { PrismaClient } from "@prisma/client";
import readDepartment from "../department/readDepartment";

export default async function createActiveCoordinator({
  coordinatorId,
  departmentId,
}) {
  const prisma = new PrismaClient();

  try {
    const coordinator = await findCoordinator({
      coordinatorId,
      departmentId,
    });
    const activeCoordinator = await prisma.activeCoordinator.create({
      data: {
        coordinatorId: coordinator.id,
        departmentId,
      },
    });
    return activeCoordinator;
  } catch (error) {
    throw error;
  }
}

async function findCoordinator({ coordinatorId, departmentId }) {
  const prisma = new PrismaClient();

  try {
    const department = await readDepartment(departmentId);

    const coordinator = await prisma.coordinator.findFirstOrThrow({
      where: {
        Faculty: {
          departmentId: department.id,
        },
        id: coordinatorId,
      },
    });

    return coordinator;
  } catch (error) {
    throw error;
  }
}
