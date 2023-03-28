import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteActiveDean(id) {
  const prisma = PRISMA_CLIENT;

  try {
    const activeDean = await prisma.activeDean.delete({
      where: {
        id,
      },
    });
    return activeDean;
  } catch (error) {
    throw error;
  }
}
