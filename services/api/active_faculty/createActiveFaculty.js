import { PrismaClient } from "@prisma/client";

export default async function createActiveFaculty({
  userId,
  facultyId,
  departmentId,
}) {
  const prisma = new PrismaClient();

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
  const prisma = new PrismaClient();

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
