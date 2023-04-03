import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createCITLDirectorEndorsement({
  iMDCoordinatorEndorsementId,
}) {
  const prisma = PRISMA_CLIENT;

  try {
    const cITLDirectorEndorsement = await prisma.cITLDirectorEndorsement.create(
      {
        data: {
          IMDCoordinatorEndorsement: {
            connect: {
              id: iMDCoordinatorEndorsementId,
            },
          },
        },
      }
    );
    return cITLDirectorEndorsement;
  } catch (error) {
    throw error;
  }
}
