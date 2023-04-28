import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readNotification({ id, ability, filter = {} }) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).Notification;

  const notification = await prisma.notification.findFirstOrThrow({
    where: {
      AND: [
        accessibility,
        {
          id,
        },
      ],
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
    },
  });
  return notification;
}
