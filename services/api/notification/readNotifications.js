import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readNotifications({
  limit,
  page,
  userId,
  read,
  ability,
  facultyId,
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).Notification;

  const notifications = await prisma.notification.findMany({
    take: limit,
    skip: (page - 1) * limit,
    orderBy: {
      createdAt: "desc",
    },
    where: {
      AND: [
        accessibility,
        {
          OR: [
            {
              SubmittedChairpersonReview: {
                IM: {
                  owner: {
                    id: { contains: facultyId },
                  },
                },
              },
            },
            {
              SubmittedCoordinatorReview: {
                IM: {
                  owner: {
                    id: { contains: facultyId },
                  },
                },
              },
            },
            {
              SubmittedPeerReview: {
                IM: {
                  owner: {
                    id: { contains: facultyId },
                  },
                },
              },
            },
            {
              SubmittedChairpersonSuggestion: {
                IM: {
                  owner: {
                    id: { contains: facultyId },
                  },
                },
              },
            },
            {
              SubmittedCoordinatorSuggestion: {
                IM: {
                  owner: {
                    id: { contains: facultyId },
                  },
                },
              },
            },
            {
              SubmittedPeerSuggestion: {
                IM: {
                  owner: {
                    id: { contains: facultyId },
                  },
                },
              },
            },
            {
              CoordinatorEndorsement: {
                IM: {
                  owner: {
                    id: { contains: facultyId },
                  },
                },
              },
            },
            {
              DeanEndorsement: {
                CoordinatorEndorsement: {
                  IM: {
                    owner: {
                      id: { contains: facultyId },
                    },
                  },
                },
              },
            },
            {
              SubmittedIMDCoordinatorSuggestion: {
                IMDCoordinatorSuggestion: {
                  IM: {
                    owner: {
                      id: { contains: facultyId },
                    },
                  },
                },
              },
            },
            {
              IMDCoordinatorEndorsement: {
                IM: {
                  owner: {
                    id: { contains: facultyId },
                  },
                },
              },
            },
          ],
          ReadNotification:
            read === true
              ? {
                  some: {
                    userId,
                  },
                }
              : read === false
              ? {
                  none: {
                    userId,
                  },
                }
              : undefined,
        },
      ],
    },
  });

  const total = await prisma.notification.count({
    where: {
      AND: [
        accessibility,
        {
          OR: [
            {
              SubmittedChairpersonReview: {
                IM: {
                  owner: {
                    id: { contains: facultyId },
                  },
                },
              },
            },
            {
              SubmittedCoordinatorReview: {
                IM: {
                  owner: {
                    id: { contains: facultyId },
                  },
                },
              },
            },
            {
              SubmittedPeerReview: {
                IM: {
                  owner: {
                    id: { contains: facultyId },
                  },
                },
              },
            },
            {
              SubmittedChairpersonSuggestion: {
                IM: {
                  owner: {
                    id: { contains: facultyId },
                  },
                },
              },
            },
            {
              SubmittedCoordinatorSuggestion: {
                IM: {
                  owner: {
                    id: { contains: facultyId },
                  },
                },
              },
            },
            {
              SubmittedPeerSuggestion: {
                IM: {
                  owner: {
                    id: { contains: facultyId },
                  },
                },
              },
            },
            {
              CoordinatorEndorsement: {
                IM: {
                  owner: {
                    id: { contains: facultyId },
                  },
                },
              },
            },
            {
              DeanEndorsement: {
                CoordinatorEndorsement: {
                  IM: {
                    owner: {
                      id: { contains: facultyId },
                    },
                  },
                },
              },
            },
            {
              SubmittedIMDCoordinatorSuggestion: {
                IMDCoordinatorSuggestion: {
                  IM: {
                    owner: {
                      id: { contains: facultyId },
                    },
                  },
                },
              },
            },
            {
              IMDCoordinatorEndorsement: {
                IM: {
                  owner: {
                    id: { contains: facultyId },
                  },
                },
              },
            },
          ],
          ReadNotification:
            read === true
              ? {
                  some: {
                    userId,
                  },
                }
              : read === false
              ? {
                  none: {
                    userId,
                  },
                }
              : undefined,
        },
      ],
    },
  });

  return { data: notifications, total };
}
