import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createActiveFaculty({
  userId,
  facultyId,
  departmentId,
}) {
  const prisma = PRISMA_CLIENT;

  try {
    const faculty = await findFaculty({
      facultyId,
      departmentId,
    });
    const activeFaculty = await prisma.activeFaculty.create({
      data: {
        departmentId,
        facultyId: faculty.id,
        userId,
      },
    });

    return activeFaculty;
  } catch (error) {
    throw error;
  }
}

async function findFaculty({ facultyId, departmentId }) {
  const prisma = PRISMA_CLIENT;

  try {
    const faculty = await prisma.faculty.findFirstOrThrow({
      where: {
        departmentId: departmentId,
        id: facultyId,
      },
    });

    return faculty;
  } catch (error) {
    throw error;
  }
}
