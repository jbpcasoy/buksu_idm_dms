import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readFaculty(id) {
  const prisma = PRISMA_CLIENT;

  try {
    const faculty = await prisma.faculty.findUniqueOrThrow({
      where: {
        id,
      },
    });

    return faculty;
  } catch (error) {
    throw error;
  }
}
