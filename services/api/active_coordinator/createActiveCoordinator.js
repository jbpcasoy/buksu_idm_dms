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

    const activeFaculty = await findActiveFaculty({ coordinatorId });

    const activeCoordinator = await prisma.activeCoordinator.create({
      data: {
        coordinatorId: coordinator.id,
        departmentId,
        activeFacultyId: activeFaculty.id,
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

async function findActiveFaculty({ coordinatorId }) {
  const prisma = new PrismaClient();

  try {
    const activeFaculty = await prisma.activeFaculty.findFirstOrThrow({
      where: {
        Faculty: {
          Coordinator: {
            id: coordinatorId,
          },
        },
      },
    });

    return activeFaculty;
  } catch (error) {
    throw error;
  }
}
