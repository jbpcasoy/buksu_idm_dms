import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readNotification(id) {
  const prisma = PRISMA_CLIENT;

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
        SubmittedChairpersonSuggestion: {
          include: {
            ChairpersonSuggestion: {
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
                  },
                },
              },
            },
            IM: true,
          },
        },
        SubmittedCoordinatorSuggestion: {
          include: {
            CoordinatorSuggestion: {
              include: {
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
                  },
                },
              },
            },
            IM: true,
          },
        },
        SubmittedPeerSuggestion: {
          include: {
            PeerSuggestion: {
              include: {
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
                  },
                },
              },
            },
            IM: true,
          },
        },
        CoordinatorEndorsement: {
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
            IM: true,
            DeanEndorsement: true,
          },
        },
      },
    });
    return notification;
  } catch (error) {
    throw error;
  }
}
