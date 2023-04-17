import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readIMEvent(id, filter = {}) {
  const prisma = PRISMA_CLIENT;

  const iMEvent = await prisma.iMEvent.findFirstOrThrow({
    where: {
      ...filter,
      id,
    },
    include: {
      IM: true,
      File: {
        include: {
          iM: true,
        },
      },
      SubmittedPeerReview: {
        include: {
          IM: true,
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
      SubmittedCoordinatorReview: {
        include: {
          IM: true,
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
      SubmittedChairpersonReview: {
        include: {
          IM: true,
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
      SubmittedPeerSuggestion: {
        include: {
          IM: true,
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
        },
      },
      SubmittedCoordinatorSuggestion: {
        include: {
          IM: true,
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
        },
      },
      SubmittedChairpersonSuggestion: {
        include: {
          IM: true,
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
        },
      },
      CoordinatorEndorsement: {
        include: {
          IM: true,
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
      DeanEndorsement: {
        include: {
          CoordinatorEndorsement: {
            include: {
              IM: true,
            },
          },
          Dean: {
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
      SubmittedIMDCoordinatorSuggestion: {
        include: {
          IMDCoordinatorSuggestion: {
            include: {
              IM: true,
              IMDCoordinator: {
                include: {
                  User: true,
                },
              },
            },
          },
        },
      },
      IMDCoordinatorEndorsement: {
        include: {
          IM: true,
          IMDCoordinator: {
            include: {
              User: true,
            },
          },
        },
      },
      CITLDirectorEndorsement: {
        include: {
          CITLDirector: {
            include: {
              User: true,
            },
          },
          IMDCoordinatorEndorsement: {
            include: {
              IM: true,
            },
          },
        },
      },
    },
  });
  return iMEvent;
}
