import { PrismaClient } from "@prisma/client";

export default async function createCollege({ name }) {
  const prisma = new PrismaClient();

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
