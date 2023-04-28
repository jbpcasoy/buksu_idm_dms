import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import readIM from "./readIM";

const { PrismaClient } = require("@prisma/client");

export default async function updateIM(
  id,
  { serialNumber, title, status, authors, type },
  ability
) {
  const prisma = PRISMA_CLIENT;

  const prevIM = await readIM({ id, ability });
  const im = await prisma.iM.update({
    where: {
      id,
    },
    data: {
      serialNumber,
      title,
      status,
      type,
      authors,
      IMEvent:
        status === "SUBMITTED"
          ? {
              create: {
                IMEventType: "SUBMITTED",
                File: {
                  connect: {
                    id: prevIM.ActiveFile.fileId,
                  },
                },
              },
            }
          : status === "DEPARTMENT_REVIEWED"
          ? {
              create: {
                IMEventType: "DEPARTMENT_REVIEWED",
                File: {
                  connect: {
                    id: prevIM.ActiveFile.fileId,
                  },
                },
              },
            }
          : status === "DEPARTMENT_REVISED"
          ? {
              create: {
                IMEventType: "DEPARTMENT_REVISED",
                File: {
                  connect: {
                    id: prevIM.ActiveFile.fileId,
                  },
                },
              },
            }
          : status === "CITL_REVIEWED"
          ? {
              create: {
                IMEventType: "CITL_REVIEWED",
                File: {
                  connect: {
                    id: prevIM.ActiveFile.fileId,
                  },
                },
              },
            }
          : status === "CITL_REVISED"
          ? {
              create: {
                IMEventType: "CITL_REVISED",
                File: {
                  connect: {
                    id: prevIM.ActiveFile.fileId,
                  },
                },
              },
            }
          : undefined,
    },
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
  });
  return im;
}
