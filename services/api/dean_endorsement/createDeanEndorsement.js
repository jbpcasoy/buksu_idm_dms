import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import readCoordinatorEndorsement from "../coordinator_endorsement/readCoordinatorEndorsement";
import readDean from "../dean/readDean";
import updateIM from "../im/updateIM";

export default async function createDeanEndorsement({
  coordinatorEndorsementId,
  deanId,
  ability,
}) {
  const prisma = PRISMA_CLIENT;

  const coordinatorEndorsement = await readCoordinatorEndorsement({
    id: coordinatorEndorsementId,
    ability,
  });
  const dean = await readDean({
    id: deanId,
    ability,
    filter: {
      ActiveDean: {
        isNot: null,
      },
      collegeId:
        coordinatorEndorsement.Coordinator.Faculty.department.collegeId,
    },
  });

  const deanEndorsement = await prisma.deanEndorsement.create({
    data: {
      Dean: {
        connect: {
          id: dean.id,
        },
      },
      CoordinatorEndorsement: {
        connect: {
          id: coordinatorEndorsement.id,
        },
      },
      Notification: {
        create: {
          Type: "DEAN_ENDORSEMENT",
        },
      },
      IMEvent: {
        create: {
          IM: {
            connect: {
              id: coordinatorEndorsement.iMId,
            },
          },
          IMEventType: "DEAN_ENDORSEMENT",
        },
      },
    },
  });

  await updateIM(
    coordinatorEndorsement.iMId,
    {
      status: "DEPARTMENT_ENDORSED",
    },
    ability
  );
  return deanEndorsement;
}
