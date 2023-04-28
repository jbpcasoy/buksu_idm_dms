const { PrismaClient } = require("@prisma/client");
import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";
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
  authors,
  owner,
  iMDCoordinatorReviewerId,
  toRevise,
  iMDCoordinatorEndorsed,
  endorsedByIMDCoordinator,
  ability,
}) {
  const prisma = PRISMA_CLIENT;
  const sortFilter = {};
  _.set(sortFilter, sortColumn, sortOrder);
  const accessibility = accessibleBy(ability).IM;

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
        accessibility,
        {
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
              IMDCoordinatorEndorsement:
                iMDCoordinatorEndorsed === true
                  ? {
                      id: {
                        contains: "",
                      },
                    }
                  : iMDCoordinatorEndorsed === false
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
              IMDCoordinatorEndorsement: endorsedByIMDCoordinator
                ? {
                    iMDCoordinatorId: {
                      contains: endorsedByIMDCoordinator,
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
              IMDCoordinatorSuggestion: iMDCoordinatorReviewerId
                ? {
                    IMDCoordinator: {
                      userId: iMDCoordinatorReviewerId,
                    },
                  }
                : undefined,
              owner: {
                user: {
                  name: { contains: owner },
                },
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
              status: toRevise
                ? {
                    in: status
                      ? ["CITL_REVIEWED", "DEPARTMENT_REVIEWED", status]
                      : ["CITL_REVIEWED", "DEPARTMENT_REVIEWED"],
                  }
                : {
                    equals: status,
                  },
              authors: {
                contains: authors,
              },
            },
          ],
        },
      ],
    },
    orderBy: sortFilter,
  });

  const total = await prisma.iM.count({
    where: {
      AND: [
        accessibility,
        {
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
              IMDCoordinatorEndorsement:
                iMDCoordinatorEndorsed === true
                  ? {
                      id: {
                        contains: "",
                      },
                    }
                  : iMDCoordinatorEndorsed === false
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
              IMDCoordinatorEndorsement: endorsedByIMDCoordinator
                ? {
                    iMDCoordinatorId: {
                      contains: endorsedByIMDCoordinator,
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
              IMDCoordinatorSuggestion: iMDCoordinatorReviewerId
                ? {
                    IMDCoordinator: {
                      userId: iMDCoordinatorReviewerId,
                    },
                  }
                : undefined,
              owner: {
                user: {
                  name: { contains: owner },
                },
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
              status: toRevise
                ? {
                    in: status
                      ? ["CITL_REVIEWED", "DEPARTMENT_REVIEWED", status]
                      : ["CITL_REVIEWED", "DEPARTMENT_REVIEWED"],
                  }
                : {
                    equals: status,
                  },
              authors: {
                contains: authors,
              },
            },
          ],
        },
      ],
    },
  });
  return { data: ims, total };
}
