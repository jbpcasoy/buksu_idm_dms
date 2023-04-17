import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import readDean from "../dean/readDean";

export default async function createActiveDean({ deanId }) {
  const prisma = PRISMA_CLIENT;

  const dean = await readDean(deanId);
  const activeFaculty = await findActiveFaculty(deanId);

  const activeDean = await prisma.activeDean.create({
    data: {
      Dean: {
        connect: {
          id: dean.id,
        },
      },
      ActiveFaculty: {
        connect: {
          id: activeFaculty.id,
        },
      },
      College: {
        connect: {
          id: dean.collegeId,
        },
      },
    },
  });

  return activeDean;
}

async function findActiveFaculty(deanId) {
  const prisma = PRISMA_CLIENT;

  const activeFaculty = await prisma.activeFaculty.findFirstOrThrow({
    where: {
      Faculty: {
        Dean: {
          id: deanId,
        },
      },
    },
  });

  return activeFaculty;
}
