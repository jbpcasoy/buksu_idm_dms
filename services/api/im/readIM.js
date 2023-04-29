import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readIM({ id, filter = {}, ability }) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).IM;

  const im = await prisma.iM.findFirstOrThrow({
    where: {
      AND: [
        accessibility,
        {
          ...filter,
          id,
        },
      ],
    },
    include: {
      CoordinatorEndorsement: {
        include: {
          DeanEndorsement: true,
        },
      },
      IMDCoordinatorEndorsement: true,
      SubmittedChairpersonSuggestion: true,
      SubmittedCoordinatorSuggestion: true,
      SubmittedPeerSuggestion: true,
      owner: {
        include: {
          user: true,
          department: {
            include: {
              college: true,
              ActiveChairperson: true,
              ActiveCoordinator: true,
            },
          },
        },
      },
      SubmittedPeerReview: {
        include: {
          PeerReview: {
            include: {
              Faculty: {
                include: {
                  user: true,
                  department: {
                    include: {
                      college: true,
                    },
                  },
                },
              },
            },
          },
        },
      },
      SubmittedChairpersonReview: {
        include: {
          ChairpersonReview: {
            include: {
              Chairperson: {
                include: {
                  Faculty: {
                    include: {
                      user: true,
                      department: {
                        include: {
                          college: true,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
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
                      department: {
                        include: {
                          college: true,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      IMDCoordinatorSuggestion: {
        include: {
          SubmittedIMDCoordinatorSuggestion: true,
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
}
