import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readNotifications({ limit, page, userId, read }) {
  const prisma = PRISMA_CLIENT;

  const notifications = await prisma.notification.findMany({
    take: limit,
    skip: (page - 1) * limit,
    orderBy: {
      createdAt: "desc",
    },
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
        {
          SubmittedChairpersonSuggestion: {
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
          SubmittedCoordinatorSuggestion: {
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
          SubmittedPeerSuggestion: {
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
          CoordinatorEndorsement: {
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
          DeanEndorsement: {
            CoordinatorEndorsement: {
              IM: {
                owner: {
                  userId: {
                    contains: userId,
                  },
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
                  userId: {
                    contains: userId,
                  },
                },
              },
            },
          },
        },
        {
          IMDCoordinatorEndorsement: {
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
          CITLDirectorEndorsement: {
            IMDCoordinatorEndorsement: {
              IM: {
                owner: {
                  userId: {
                    contains: userId,
                  },
                },
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
        {
          SubmittedChairpersonSuggestion: {
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
          SubmittedCoordinatorSuggestion: {
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
          SubmittedPeerSuggestion: {
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
          CoordinatorEndorsement: {
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
          DeanEndorsement: {
            CoordinatorEndorsement: {
              IM: {
                owner: {
                  userId: {
                    contains: userId,
                  },
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
                  userId: {
                    contains: userId,
                  },
                },
              },
            },
          },
        },
        {
          IMDCoordinatorEndorsement: {
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
          CITLDirectorEndorsement: {
            IMDCoordinatorEndorsement: {
              IM: {
                owner: {
                  userId: {
                    contains: userId,
                  },
                },
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
  });

  return { data: notifications, total };
}
