import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readCollege(id) {
  const prisma = PRISMA_CLIENT;

  try {
    const college = await prisma.college.findUniqueOrThrow({
      where: {
        id,
      },
    });

    return college;
  } catch (error) {
    throw error;
  }
}
