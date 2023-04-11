import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readIMEvents({ limit, page, iMId, facultyId }) {
  const prisma = PRISMA_CLIENT;

  try {
    const iMEvents = await prisma.iMEvent.findMany({
      take: limit,
      skip: (page - 1) * limit,
      orderBy: {
        createdAt: "desc",
      },
      where: {
        AND: [
          {
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
          {
            OR: [
              {
                CoordinatorEndorsement: {
                  Coordinator: {
                    facultyId: {
                      contains: facultyId,
                    },
                  },
                },
              },
              {
                DeanEndorsement: {
                  Dean: {
                    facultyId: {
                      contains: facultyId,
                    },
                  },
                },
              },
              {
                File: {
                  iM: {
                    ownerId: {
                      contains: facultyId,
                    },
                  },
                },
              },
              {
                IM: {
                  ownerId: {
                    contains: facultyId,
                  },
                },
              },
              {
                SubmittedChairpersonReview: {
                  ChairpersonReview: {
                    Chairperson: {
                      facultyId: {
                        contains: facultyId,
                      },
                    },
                  },
                },
              },
              {
                SubmittedChairpersonSuggestion: {
                  ChairpersonSuggestion: {
                    SubmittedChairpersonReview: {
                      ChairpersonReview: {
                        Chairperson: {
                          facultyId: {
                            contains: facultyId,
                          },
                        },
                      },
                    },
                  },
                },
              },
              {
                SubmittedCoordinatorReview: {
                  CoordinatorReview: {
                    Coordinator: {
                      facultyId: {
                        contains: facultyId,
                      },
                    },
                  },
                },
              },
              {
                SubmittedCoordinatorSuggestion: {
                  CoordinatorSuggestion: {
                    SubmittedCoordinatorReview: {
                      CoordinatorReview: {
                        Coordinator: {
                          facultyId: {
                            contains: facultyId,
                          },
                        },
                      },
                    },
                  },
                },
              },
              {
                SubmittedPeerReview: {
                  PeerReview: {
                    facultyId: {
                      contains: facultyId,
                    },
                  },
                },
              },
              {
                SubmittedPeerSuggestion: {
                  PeerSuggestion: {
                    SubmittedPeerReview: {
                      PeerReview: {
                        facultyId: {
                          contains: facultyId,
                        },
                      },
                    },
                  },
                },
              },
            ],
          },
        ],
      },
    });
    const total = await prisma.iMEvent.count({
      where: {
        AND: [
          {
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
          {
            OR: [
              {
                CoordinatorEndorsement: {
                  Coordinator: {
                    facultyId: {
                      contains: facultyId,
                    },
                  },
                },
              },
              {
                DeanEndorsement: {
                  Dean: {
                    facultyId: {
                      contains: facultyId,
                    },
                  },
                },
              },
              {
                File: {
                  iM: {
                    ownerId: {
                      contains: facultyId,
                    },
                  },
                },
              },
              {
                IM: {
                  ownerId: {
                    contains: facultyId,
                  },
                },
              },
              {
                SubmittedChairpersonReview: {
                  ChairpersonReview: {
                    Chairperson: {
                      facultyId: {
                        contains: facultyId,
                      },
                    },
                  },
                },
              },
              {
                SubmittedChairpersonSuggestion: {
                  ChairpersonSuggestion: {
                    SubmittedChairpersonReview: {
                      ChairpersonReview: {
                        Chairperson: {
                          facultyId: {
                            contains: facultyId,
                          },
                        },
                      },
                    },
                  },
                },
              },
              {
                SubmittedCoordinatorReview: {
                  CoordinatorReview: {
                    Coordinator: {
                      facultyId: {
                        contains: facultyId,
                      },
                    },
                  },
                },
              },
              {
                SubmittedCoordinatorSuggestion: {
                  CoordinatorSuggestion: {
                    SubmittedCoordinatorReview: {
                      CoordinatorReview: {
                        Coordinator: {
                          facultyId: {
                            contains: facultyId,
                          },
                        },
                      },
                    },
                  },
                },
              },
              {
                SubmittedPeerReview: {
                  PeerReview: {
                    facultyId: {
                      contains: facultyId,
                    },
                  },
                },
              },
              {
                SubmittedPeerSuggestion: {
                  PeerSuggestion: {
                    SubmittedPeerReview: {
                      PeerReview: {
                        facultyId: {
                          contains: facultyId,
                        },
                      },
                    },
                  },
                },
              },
            ],
          },
        ],
      },
    });
    return { data: iMEvents, total };
  } catch (error) {
    throw error;
  }
}
