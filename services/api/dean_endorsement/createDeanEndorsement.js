import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import readCoordinatorEndorsement from "../coordinator_endorsement/readCoordinatorEndorsement";
import readDean from "../dean/readDean";
import updateIM from "../im/updateIM";

export default async function createDeanEndorsement({
  coordinatorEndorsementId,
  deanId,
}) {
  const prisma = PRISMA_CLIENT;

  try {
    const coordinatorEndorsement = await readCoordinatorEndorsement(
      coordinatorEndorsementId
    );
    const dean = await readDean(deanId, {
      ActiveDean: {
        isNot: null,
      },
      collegeId:
        coordinatorEndorsement.Coordinator.Faculty.department.collegeId,
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
      },
    });

    await updateIM(coordinatorEndorsement.iMId, {
      status: "DEPARTMENT_ENDORSED",
    });
    return deanEndorsement;
  } catch (error) {
    throw error;
  }
}
