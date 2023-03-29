const { PrismaClient } = require("@prisma/client");
import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import _ from "lodash";

export default async function readIMs({
  page,
  limit,
  serialNumber,
  title,
  status,
  ownerId,
  notOwnerId,
  departmentId,
  reviewerId,
  sortColumn,
  sortOrder,
  type,
  coordinatorEndorsed,
  deanEndorsed,
  collegeId,
  endorsedByDean,
  endorsedByCoordinator,
}) {
  const prisma = PRISMA_CLIENT;
  const sortFilter = {};
  _.set(sortFilter, sortColumn, sortOrder);

  try {
    const ims = await prisma.iM.findMany({
      take: limit,
      skip: (page - 1) * limit,
      include: {
        SubmittedChairpersonSuggestion: true,
        SubmittedPeerSuggestion: true,
        SubmittedCoordinatorSuggestion: true,
        SubmittedPeerReview: {
          select: {
            PeerReview: {
              include: {
                Faculty: {
                  select: { userId: true },
                },
              },
            },
          },
        },
        SubmittedChairpersonReview: {
          select: {
            ChairpersonReview: {
              include: {
                Chairperson: {
                  select: {
                    Faculty: {
                      select: { userId: true },
                    },
                  },
                },
              },
            },
          },
        },
        SubmittedCoordinatorReview: {
          select: {
            CoordinatorReview: {
              include: {
                Coordinator: {
                  select: {
                    Faculty: {
                      select: { userId: true },
                    },
                  },
                },
              },
            },
          },
        },
        owner: {
          select: {
            department: {
              select: {
                name: true,
              },
            },
            user: {
              select: {
                name: true,
              },
            },
          },
        },
      },
      where: {
        AND: [
          {
            CoordinatorEndorsement:
              coordinatorEndorsed === true
                ? {
                    id: {
                      contains: "",
                    },
                  }
                : coordinatorEndorsed === false
                ? {
                    isNot: {
                      id: { contains: "" },
                    },
                  }
                : undefined,
          },
          {
            CoordinatorEndorsement: {
              DeanEndorsement:
                deanEndorsed === true
                  ? {
                      id: {
                        contains: "",
                      },
                    }
                  : deanEndorsed === false
                  ? {
                      isNot: {
                        id: {
                          contains: "",
                        },
                      },
                    }
                  : undefined,
            },
          },
          {
            CoordinatorEndorsement: {
              DeanEndorsement: endorsedByDean
                ? {
                    deanId: {
                      contains: endorsedByDean,
                    },
                  }
                : undefined,
            },
          },
          {
            CoordinatorEndorsement: endorsedByCoordinator
              ? {
                  coordinatorId: {
                    contains: endorsedByCoordinator,
                  },
                }
              : undefined,
          },
          {
            ownerId: {
              not: notOwnerId,
            },
          },
          {
            OR: reviewerId
              ? [
                  {
                    SubmittedPeerReview: {
                      PeerReview: {
                        Faculty: {
                          userId: { contains: reviewerId },
                        },
                      },
                    },
                  },
                  {
                    SubmittedChairpersonReview: {
                      ChairpersonReview: {
                        Chairperson: {
                          Faculty: {
                            userId: { contains: reviewerId },
                          },
                        },
                      },
                    },
                  },
                  {
                    SubmittedCoordinatorReview: {
                      CoordinatorReview: {
                        Coordinator: {
                          Faculty: {
                            userId: { contains: reviewerId },
                          },
                        },
                      },
                    },
                  },
                ]
              : undefined,
            owner: {
              departmentId: departmentId,
              department: {
                collegeId: collegeId,
              },
            },
            type: {
              equals: type,
            },
            ownerId: ownerId,
            serialNumber: serialNumber
              ? {
                  contains: serialNumber,
                  // mode: "insensitive",
                }
              : undefined,
            title: {
              contains: title,
              // mode: "insensitive",
            },
            status: {
              equals: status,
            },
          },
        ],
      },
      orderBy: sortFilter,
    });

    const total = await prisma.iM.count({
      where: {
        AND: [
          {
            CoordinatorEndorsement:
              coordinatorEndorsed === true
                ? {
                    id: {},
                  }
                : coordinatorEndorsed === false
                ? {
                    isNot: {
                      id: { contains: "" },
                    },
                  }
                : undefined,
          },
          {
            CoordinatorEndorsement: {
              DeanEndorsement:
                deanEndorsed === true
                  ? {
                      id: {
                        contains: "",
                      },
                    }
                  : deanEndorsed === false
                  ? {
                      isNot: {
                        id: {
                          contains: "",
                        },
                      },
                    }
                  : undefined,
            },
          },
          {
            CoordinatorEndorsement: {
              DeanEndorsement: endorsedByDean
                ? {
                    deanId: {
                      contains: endorsedByDean,
                    },
                  }
                : undefined,
            },
          },
          {
            CoordinatorEndorsement: endorsedByCoordinator
              ? {
                  coordinatorId: {
                    contains: endorsedByCoordinator,
                  },
                }
              : undefined,
          },
          {
            ownerId: {
              not: notOwnerId,
            },
          },
          {
            OR: reviewerId
              ? [
                  {
                    SubmittedPeerReview: {
                      PeerReview: {
                        Faculty: {
                          userId: { contains: reviewerId },
                        },
                      },
                    },
                  },
                  {
                    SubmittedChairpersonReview: {
                      ChairpersonReview: {
                        Chairperson: {
                          Faculty: {
                            userId: { contains: reviewerId },
                          },
                        },
                      },
                    },
                  },
                  {
                    SubmittedCoordinatorReview: {
                      CoordinatorReview: {
                        Coordinator: {
                          Faculty: {
                            userId: { contains: reviewerId },
                          },
                        },
                      },
                    },
                  },
                ]
              : undefined,
            owner: {
              departmentId: departmentId,
              department: {
                collegeId: collegeId,
              },
            },
            type: {
              equals: type,
            },
            ownerId: ownerId,
            serialNumber: serialNumber
              ? {
                  contains: serialNumber,
                  // mode: "insensitive",
                }
              : undefined,
            title: {
              contains: title,
              // mode: "insensitive",
            },
            status: {
              equals: status,
            },
          },
        ],
      },
    });
    return { data: ims, total };
  } catch (error) {
    throw error;
  }
}
