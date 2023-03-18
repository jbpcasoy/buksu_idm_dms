import { PrismaClient } from "@prisma/client";

export default async function readNotifications({ limit, page, userId }) {
  const prisma = new PrismaClient();

  try {
    const notifications = await prisma.notification.findMany({
      take: limit,
      skip: (page - 1) * limit,
      where: {
        OR: [
          {
            SubmittedChairpersonReview: {
              IM: {
                owner: {
                  userId: {
                    contains: userId,
                  },
                },
              },
            },
          },
          {
            SubmittedCoordinatorReview: {
              IM: {
                owner: {
                  userId: {
                    contains: userId,
                  },
                },
              },
            },
          },
          {
            SubmittedPeerReview: {
              IM: {
                owner: {
                  userId: {
                    contains: userId,
                  },
                },
              },
            },
          },
        ],
      },
    });

    const total = await prisma.notification.count({
      where: {
        OR: [
          {
            SubmittedChairpersonReview: {
              IM: {
                owner: {
                  userId: {
                    contains: userId,
                  },
                },
              },
            },
          },
          {
            SubmittedCoordinatorReview: {
              IM: {
                owner: {
                  userId: {
                    contains: userId,
                  },
                },
              },
            },
          },
          {
            SubmittedPeerReview: {
              IM: {
                owner: {
                  userId: {
                    contains: userId,
                  },
                },
              },
            },
          },
        ],
      },
    });

    return { data: notifications, total };
  } catch (error) {
    throw error;
  }
}
