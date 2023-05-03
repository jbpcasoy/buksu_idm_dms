import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import moment from "moment";

const statusToEvent = {
  DRAFT: "IM_CREATED",
  SUBMITTED: "SUBMITTED",
  DEPARTMENT_REVIEWED: "DEPARTMENT_REVIEWED",
  DEPARTMENT_REVISED: "DEPARTMENT_REVISED",
  DEPARTMENT_ENDORSED: "DEAN_ENDORSEMENT",
  CITL_REVIEWED: "CITL_REVIEWED",
  CITL_REVISED: "CITL_REVISED",
  CITL_ENDORSED: "IMD_COORDINATOR_ENDORSEMENT",
};

export default async function countIM({
  status,
  year,
  collegeId,
  departmentId,
}) {
  const prisma = PRISMA_CLIENT;

  const startDate = moment().year(year).startOf("year").toDate();
  const endDate = moment().year(year).endOf("year").toDate();
  const event = statusToEvent[status];

  const count = await prisma.iM.count({
    where: {
      IMEvent: {
        some: {
          IMEventType: {
            equals: statusToEvent[status],
          },
          createdAt: { gte: startDate, lte: endDate },
        },
      },
      owner: {
        department: {
          id: {
            contains: departmentId,
          },
          collegeId: {
            contains: collegeId,
          },
        },
      },
    },
  });

  return count;
}
