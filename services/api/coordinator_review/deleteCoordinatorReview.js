import { PRISMA_CLIENT } from "@/prisma/prisma_client";

const { PrismaClient } = require("@prisma/client");

export default async function deleteCoordinatorReview(id) {
  const prisma = PRISMA_CLIENT;

  const coordinatorReview = await prisma.coordinatorReview.delete({
    where: {
      id,
    },
  });
  return coordinatorReview;
}
