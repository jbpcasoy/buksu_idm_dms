import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readIMEvents({ limit, page, iMId }) {
  const prisma = PRISMA_CLIENT;

  try {
    const iMEvents = await prisma.iMEvent.findMany({
      take: limit,
      skip: (page - 1) * limit,
      orderBy: {
        createdAt: "desc",
      },
      where: {
        OR: [
          {
            CoordinatorEndorsement: {
              iMId: {
                contains: iMId,
              },
            },
          },
          {
            CITLDirectorEndorsement: {
              IMDCoordinatorEndorsement: {
                iMId: {
                  contains: iMId,
                },
              },
            },
          },
          {
            DeanEndorsement: {
              CoordinatorEndorsement: {
                iMId: {
                  contains: iMId,
                },
              },
            },
          },
          {
            File: {
              iMId: {
                contains: iMId,
              },
            },
          },
          {
            IM: {
              id: {
                contains: iMId,
              },
            },
          },
          {
            IMDCoordinatorEndorsement: {
              iMId: {
                contains: iMId,
              },
            },
          },
          {
            SubmittedChairpersonReview: {
              iMId: {
                contains: iMId,
              },
            },
          },
          {
            SubmittedChairpersonSuggestion: {
              iMId: {
                contains: iMId,
              },
            },
          },
          {
            SubmittedCoordinatorReview: {
              iMId: {
                contains: iMId,
              },
            },
          },
          {
            SubmittedCoordinatorSuggestion: {
              iMId: {
                contains: iMId,
              },
            },
          },
          {
            SubmittedIMDCoordinatorSuggestion: {
              IMDCoordinatorSuggestion: {
                iMId: {
                  contains: iMId,
                },
              },
            },
          },
          {
            SubmittedPeerReview: {
              iMId: {
                contains: iMId,
              },
            },
          },
          {
            SubmittedPeerSuggestion: {
              iMId: {
                contains: iMId,
              },
            },
          },
        ],
      },
    });
    const total = await prisma.iMEvent.count({
      where: {
        OR: [
          {
            CoordinatorEndorsement: {
              iMId: {
                contains: iMId,
              },
            },
          },
          {
            CITLDirectorEndorsement: {
              IMDCoordinatorEndorsement: {
                iMId: {
                  contains: iMId,
                },
              },
            },
          },
          {
            DeanEndorsement: {
              CoordinatorEndorsement: {
                iMId: {
                  contains: iMId,
                },
              },
            },
          },
          {
            File: {
              iMId: {
                contains: iMId,
              },
            },
          },
          {
            IM: {
              id: {
                contains: iMId,
              },
            },
          },
          {
            IMDCoordinatorEndorsement: {
              iMId: {
                contains: iMId,
              },
            },
          },
          {
            SubmittedChairpersonReview: {
              iMId: {
                contains: iMId,
              },
            },
          },
          {
            SubmittedChairpersonSuggestion: {
              iMId: {
                contains: iMId,
              },
            },
          },
          {
            SubmittedCoordinatorReview: {
              iMId: {
                contains: iMId,
              },
            },
          },
          {
            SubmittedCoordinatorSuggestion: {
              iMId: {
                contains: iMId,
              },
            },
          },
          {
            SubmittedIMDCoordinatorSuggestion: {
              IMDCoordinatorSuggestion: {
                iMId: {
                  contains: iMId,
                },
              },
            },
          },
          {
            SubmittedPeerReview: {
              iMId: {
                contains: iMId,
              },
            },
          },
          {
            SubmittedPeerSuggestion: {
              iMId: {
                contains: iMId,
              },
            },
          },
        ],
      },
    });
    return { data: iMEvents, total };
  } catch (error) {
    throw error;
  }
}
