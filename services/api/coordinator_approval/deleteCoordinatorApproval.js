import { PrismaClient } from "@prisma/client";

export default async function deleteCoordinatorApproval(id) {
  const prisma = new PrismaClient();

  try {
    const coordinatorApproval = await prisma.coordinatorApproval.delete({
      where: {
        id,
      },
    });

    return coordinatorApproval;
  } catch (error) {
    throw error;
  }
}
