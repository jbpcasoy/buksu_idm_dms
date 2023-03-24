import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readActiveFaculty(id) {
  const prisma = PRISMA_CLIENT;

  try {
    const activeFaculty = await prisma.activeFaculty.findUniqueOrThrow({
      where: {
        id,
      },
    });
    return activeFaculty;
  } catch (error) {
    throw error;
  }
}
