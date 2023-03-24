import { PRISMA_CLIENT } from "@/prisma/prisma_client";

const { PrismaClient } = require("@prisma/client");

export default async function readIM(id) {
  const prisma = PRISMA_CLIENT;

  try {
    const im = await prisma.iM.findUniqueOrThrow({
      where: {
        id,
      },
      include: {
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
          select: {
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
