import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function updateCollege(id, { name }) {
  const prisma = PRISMA_CLIENT;

  try {
    const college = await prisma.college.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });

    return college;
  } catch (error) {
    throw error;
  }
}
