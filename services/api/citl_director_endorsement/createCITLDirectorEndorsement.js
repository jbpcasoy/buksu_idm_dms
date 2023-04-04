import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import updateIM from "../im/updateIM";
import readIMDCoordinatorEndorsement from "../imd_coordinator_endorsement/readIMDCoordinatorEndorsement";

export default async function createCITLDirectorEndorsement({
  iMDCoordinatorEndorsementId,
  cITLDirectorId,
}) {
  const prisma = PRISMA_CLIENT;

  try {
    const iMDCoordinatorEndorsement = await readIMDCoordinatorEndorsement(
      iMDCoordinatorEndorsementId
    );
    const cITLDirectorEndorsement = await prisma.cITLDirectorEndorsement.create(
      {
        data: {
          IMDCoordinatorEndorsement: {
            connect: {
              id: iMDCoordinatorEndorsementId,
            },
          },
          CITLDirector: {
            connect: {
              id: cITLDirectorId,
            },
          },
          Notification: {
            create: {
              Type: "CITL_DIRECTOR_ENDORSEMENT",
            },
          },
        },
      }
    );

    await updateIM(iMDCoordinatorEndorsement.iMId, {
      status: "CITL_ENDORSED",
    });
    return cITLDirectorEndorsement;
  } catch (error) {
    throw error;
  }
}
