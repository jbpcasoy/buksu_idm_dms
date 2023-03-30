import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readIM(id, filter = {}) {
  const prisma = PRISMA_CLIENT;

  try {
    const im = await prisma.iM.findFirstOrThrow({
      where: {
        ...filter,
        id,
      },
      include: {
        CoordinatorEndorsement: {
          include: {
            DeanEndorsement: true,
          },
        },
        SubmittedChairpersonSuggestion: true,
        SubmittedCoordinatorSuggestion: true,
        SubmittedPeerSuggestion: true,
        owner: {
          include: {
            user: true,
          },
        },
        SubmittedPeerReview: {
          include: {
            PeerReview: true,
          },
        },
        SubmittedChairpersonReview: {
          include: {
            ChairpersonReview: true,
          },
        },
        SubmittedCoordinatorReview: {
          include: {
            CoordinatorReview: true,
          },
        },
        ActiveFile: {
          include: {
            File: {
              select: {
                fileName: true,
              },
            },
          },
        },
      },
    });

    return im;
  } catch (error) {
    throw error;
  }
}
