import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createCollege({ name }) {
  const prisma = PRISMA_CLIENT;

  try {
    const college = await prisma.college.create({
      data: {
        name,
      },
    });

    return college;
  } catch (error) {
    throw error;
  }
}
