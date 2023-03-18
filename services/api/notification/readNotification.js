import { PrismaClient } from "@prisma/client";

export default async function readNotification(id) {
  const prisma = new PrismaClient();

  try {
    const notification = await prisma.notification.findUniqueOrThrow({
      where: {
        id,
      },
      include: {
        SubmittedChairpersonReview: {
          include: {
            ChairpersonReview: {
              include: {
                Chairperson: {
                  include: {
                    Faculty: {
                      include: {
                        user: true,
                      },
                    },
                  },
                },
              },
            },
            IM: true,
          },
        },
        SubmittedCoordinatorReview: {
          include: {
            CoordinatorReview: {
              include: {
                Coordinator: {
                  include: {
                    Faculty: {
                      include: {
                        user: true,
                      },
                    },
                  },
                },
              },
            },
            IM: true,
          },
        },
        SubmittedPeerReview: {
          include: {
            PeerReview: {
              include: {
                Faculty: {
                  include: {
                    user: true,
                  },
                },
              },
            },
            IM: true,
          },
        },
      },
    });
    return notification;
  } catch (error) {
    throw error;
  }
}
