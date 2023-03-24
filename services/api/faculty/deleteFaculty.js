import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteFaculty(id) {
  const prisma = PRISMA_CLIENT;

  try {
    const faculty = await prisma.faculty.delete({
      where: {
        id,
      },
    });

    return faculty;
  } catch (error) {
    throw error;
  }
}
