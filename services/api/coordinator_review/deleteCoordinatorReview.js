const { PrismaClient } = require("@prisma/client");

export default async function deleteCoordinatorReview(id) {
  const prisma = new PrismaClient();

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
