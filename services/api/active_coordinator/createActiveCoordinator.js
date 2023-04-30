import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createActiveCoordinator({ coordinatorId }) {
  const prisma = PRISMA_CLIENT;

  const coordinator = await findCoordinator({
    coordinatorId,
  });

  const activeFaculty = await findActiveFaculty({
    facultyId: coordinator.facultyId,
  });

  const activeCoordinator = await prisma.activeCoordinator.create({
    data: {
      coordinatorId: coordinator.id,
      departmentId: coordinator.Faculty.departmentId,
      activeFacultyId: activeFaculty.id,
    },
  });
  return activeCoordinator;
}

async function findCoordinator({ coordinatorId, departmentId }) {
  const prisma = PRISMA_CLIENT;

  const coordinator = await prisma.coordinator.findFirstOrThrow({
    where: {
      Faculty: {
        departmentId: departmentId,
      },
      id: coordinatorId,
    },
    include: {
      Faculty: {
        include: {
          department: true,
        },
      },
    },
  });

  return coordinator;
}

async function findActiveFaculty({ facultyId }) {
  const prisma = PRISMA_CLIENT;

  const activeFaculty = await prisma.activeFaculty.findUniqueOrThrow({
    where: {
      facultyId,
    },
  });

  return activeFaculty;
}
