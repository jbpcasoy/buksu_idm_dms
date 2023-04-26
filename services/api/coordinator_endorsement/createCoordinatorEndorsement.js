import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import readCoordinator from "../coordinator/readCoordinator";
import readIM from "../im/readIM";

export default async function createCoordinatorEndorsement({
  iMId,
  coordinatorId,
  ability,
}) {
  const prisma = PRISMA_CLIENT;

  const iM = await readIM({
    id: iMId,
    filter: {
      status: "DEPARTMENT_REVISED",
    },
    ability,
  });
  const coordinator = await readCoordinator({ id: coordinatorId, ability });

  const coordinatorEndorsement = await prisma.coordinatorEndorsement.create({
    data: {
      IM: {
        connect: {
          id: iM.id,
        },
      },
      Coordinator: {
        connect: {
          id: coordinator.id,
        },
      },
      Notification: {
        create: {
          Type: "COORDINATOR_ENDORSEMENT",
        },
      },
      IMEvent: {
        create: {
          IMEventType: "COORDINATOR_ENDORSEMENT",
        },
      },
    },
  });

  return coordinatorEndorsement;
}
