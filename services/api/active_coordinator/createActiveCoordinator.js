import { PrismaClient } from "@prisma/client";

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
    const coordinator = await prisma.coordinator.findFirstOrThrow({
      where: {
        Faculty: {
          departmentId: departmentId,
        },
        id: coordinatorId,
      },
    });

    return coordinator;
  } catch (error) {
    throw error;
  }
}
