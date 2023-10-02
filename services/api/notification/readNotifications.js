import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";
import readFaculty from "../faculty/readFaculty";
import readUser from "../user/readUser";

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
  const faculty = facultyId
    ? await readFaculty({ id: facultyId, ability })
    : undefined;
  const user = await readUser({ id: userId, ability });

  // TODO: check if faculty has roles
  // problem: shows submitted im notification on regular faculty

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
              CoordinatorEndorsement: {
                Coordinator: {
                  Faculty: {
                    department: {
                      collegeId:
                        faculty?.ActiveFaculty?.ActiveDean?.collegeId ?? "",
                    },
                  },
                },
              },
            },
            {
              Type: {
                equals: "SUBMITTED",
              },
              IM: {
                owner: {
                  departmentId: {
                    equals:
                      faculty?.ActiveFaculty?.ActiveChairperson?.departmentId ??
                      "",
                  },
                },
              },
            },
            {
              Type: {
                equals: "SUBMITTED",
              },
              IM: {
                owner: {
                  departmentId: {
                    equals:
                      faculty?.ActiveFaculty?.ActiveCoordinator?.departmentId ??
                      "",
                  },
                },
              },
            },
            {
              Type: {
                equals: "DEPARTMENT_REVISED",
              },
              IM: {
                owner: {
                  departmentId: {
                    equals:
                      faculty?.ActiveFaculty?.ActiveCoordinator?.departmentId ??
                      "",
                  },
                },
              },
            },
            {
              Type: {
                equals: "CITL_REVISED",
              },
              IM: {
                IMDCoordinatorSuggestion: {
                  SubmittedIMDCoordinatorSuggestion: {
                    IMDCoordinatorSuggestion: {
                      iMDCoordinatorId:
                        user?.IMDCoordinator?.ActiveIMDCoordinator
                          ?.iMDCoordinatorId ?? "",
                    },
                  },
                },
              },
            },
            {
              SubmittedChairpersonReview: {
                IM: {
                  owner: {
                    id: { equals: facultyId ?? "" },
                  },
                },
              },
            },
            {
              SubmittedCoordinatorReview: {
                IM: {
                  owner: {
                    id: { equals: facultyId ?? "" },
                  },
                },
              },
            },
            {
              SubmittedPeerReview: {
                IM: {
                  owner: {
                    id: { equals: facultyId ?? "" },
                  },
                },
              },
            },
            {
              SubmittedChairpersonSuggestion: {
                IM: {
                  owner: {
                    id: { equals: facultyId ?? "" },
                  },
                },
              },
            },
            {
              SubmittedCoordinatorSuggestion: {
                IM: {
                  owner: {
                    id: { equals: facultyId ?? "" },
                  },
                },
              },
            },
            {
              SubmittedPeerSuggestion: {
                IM: {
                  owner: {
                    id: { equals: facultyId ?? "" },
                  },
                },
              },
            },
            {
              CoordinatorEndorsement: {
                IM: {
                  owner: {
                    id: { equals: facultyId ?? "" },
                  },
                },
              },
            },
            {
              DeanEndorsement: {
                CoordinatorEndorsement: {
                  IM: {
                    owner: {
                      id: { equals: facultyId ?? "" },
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
                      id: { equals: facultyId ?? "" },
                    },
                  },
                },
              },
            },
            {
              IMDCoordinatorEndorsement: {
                IM: {
                  owner: {
                    id: { equals: facultyId ?? "" },
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
              CoordinatorEndorsement: {
                Coordinator: {
                  Faculty: {
                    department: {
                      collegeId:
                        faculty?.ActiveFaculty?.ActiveDean?.collegeId ?? "",
                    },
                  },
                },
              },
            },
            {
              Type: {
                equals: "SUBMITTED",
              },
              IM: {
                owner: {
                  departmentId: {
                    equals:
                      faculty?.ActiveFaculty?.ActiveChairperson?.departmentId ??
                      "",
                  },
                },
              },
            },
            {
              Type: {
                equals: "SUBMITTED",
              },
              IM: {
                owner: {
                  departmentId: {
                    equals:
                      faculty?.ActiveFaculty?.ActiveCoordinator?.departmentId ??
                      "",
                  },
                },
              },
            },
            {
              Type: {
                equals: "DEPARTMENT_REVISED",
              },
              IM: {
                owner: {
                  departmentId: {
                    equals:
                      faculty?.ActiveFaculty?.ActiveCoordinator?.departmentId ??
                      "",
                  },
                },
              },
            },
            {
              Type: {
                equals: "CITL_REVISED",
              },
              IM: {
                IMDCoordinatorSuggestion: {
                  SubmittedIMDCoordinatorSuggestion: {
                    IMDCoordinatorSuggestion: {
                      iMDCoordinatorId:
                        user?.IMDCoordinator?.ActiveIMDCoordinator
                          ?.iMDCoordinatorId ?? "",
                    },
                  },
                },
              },
            },
            {
              SubmittedChairpersonReview: {
                IM: {
                  owner: {
                    id: { equals: facultyId ?? "" },
                  },
                },
              },
            },
            {
              SubmittedCoordinatorReview: {
                IM: {
                  owner: {
                    id: { equals: facultyId ?? "" },
                  },
                },
              },
            },
            {
              SubmittedPeerReview: {
                IM: {
                  owner: {
                    id: { equals: facultyId ?? "" },
                  },
                },
              },
            },
            {
              SubmittedChairpersonSuggestion: {
                IM: {
                  owner: {
                    id: { equals: facultyId ?? "" },
                  },
                },
              },
            },
            {
              SubmittedCoordinatorSuggestion: {
                IM: {
                  owner: {
                    id: { equals: facultyId ?? "" },
                  },
                },
              },
            },
            {
              SubmittedPeerSuggestion: {
                IM: {
                  owner: {
                    id: { equals: facultyId ?? "" },
                  },
                },
              },
            },
            {
              CoordinatorEndorsement: {
                IM: {
                  owner: {
                    id: { equals: facultyId ?? "" },
                  },
                },
              },
            },
            {
              DeanEndorsement: {
                CoordinatorEndorsement: {
                  IM: {
                    owner: {
                      id: { equals: facultyId ?? "" },
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
                      id: { equals: facultyId ?? "" },
                    },
                  },
                },
              },
            },
            {
              IMDCoordinatorEndorsement: {
                IM: {
                  owner: {
                    id: { equals: facultyId ?? "" },
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
