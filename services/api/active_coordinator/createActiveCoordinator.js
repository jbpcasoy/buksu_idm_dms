import { PrismaClient } from "@prisma/client";

export default async function createActiveCoordinator({
  departmentId,
  coordinatorId,
}) {
  const prisma = new PrismaClient();

  try {
    const activeCoordinator = await prisma.activeCoordinator.create({
      data: {
        departmentId,
        coordinatorId,
      },
    });
    return activeCoordinator;
  } catch (error) {
    throw error;
  }
}
