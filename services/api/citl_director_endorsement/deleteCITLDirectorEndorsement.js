import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteCITLDirectorEndorsement(id) {
  const prisma = PRISMA_CLIENT;

  try {
    const cITLDirectorEndorsement = await prisma.cITLDirectorEndorsement.delete(
      {
        where: {
          id,
        },
      }
    );

    return cITLDirectorEndorsement;
  } catch (error) {
    throw error;
  }
}
