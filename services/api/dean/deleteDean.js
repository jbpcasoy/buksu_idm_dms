import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteDean(id) {
  const prisma = PRISMA_CLIENT;

  try {
    const dean = await prisma.dean.delete({
      where: {
        id,
      },
    });
    return dean;
  } catch (error) {
    throw error;
  }
}
