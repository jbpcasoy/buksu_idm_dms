import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import readFaculty from "../faculty/readFaculty";
import userAbility from "@/services/abilities/defineAbility";

export default async function createActiveFaculty({ facultyId, ability }) {
  const prisma = PRISMA_CLIENT;

  const faculty = await readFaculty({ id: facultyId, ability });

  const activeFaculty = await prisma.activeFaculty.create({
    data: {
      Department: {
        connect: {
          id: faculty.departmentId,
        },
      },
      Faculty: { connect: { id: faculty.id } },
      User: {
        connect: { id: faculty.userId },
      },
    },
  });

  return activeFaculty;
}
