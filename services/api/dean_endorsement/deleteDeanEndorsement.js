import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteDeanEndorsement(id) {
  const prisma = PRISMA_CLIENT;

  try {
    const deanEndorsement = await prisma.deanEndorsement.delete({
      where: {
        id,
      },
    });
    return deanEndorsement;
  } catch (error) {
    throw error;
  }
}
