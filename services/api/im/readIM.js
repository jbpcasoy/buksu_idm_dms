const { PrismaClient } = require("@prisma/client");

export default async function readIM(id) {
  const prisma = new PrismaClient();

  try {
    const im = await prisma.iM.findUniqueOrThrow({
      where: {
        id,
      },
      include: {
        owner: true,
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
