import { PRISMA_CLIENT } from "@/prisma/prisma_client";

const { PrismaClient } = require("@prisma/client");

export default async function deleteCoordinatorReview(id) {
  const prisma = PRISMA_CLIENT;

  try {
    const coordinatorReview = await prisma.coordinatorReview.delete({
      where: {
        id,
      },
    });
    return coordinatorReview;
  } catch (error) {
    throw error;
  }
}
