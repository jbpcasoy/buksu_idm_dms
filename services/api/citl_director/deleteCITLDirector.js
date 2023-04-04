import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteCITLDirector(id) {
  const prisma = PRISMA_CLIENT;

  try {
    const cITLDirector = await prisma.cITLDirector.delete({
      where: {
        id,
      },
    });
    return cITLDirector;
  } catch (error) {
    throw error;
  }
}
