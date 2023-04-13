import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import readFaculty from "../faculty/readFaculty";

export default async function createActiveFaculty({ facultyId }) {
  const prisma = PRISMA_CLIENT;

  try {
    const faculty = await readFaculty(facultyId);

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
  } catch (error) {
    throw error;
  }
}
