import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readFile(id) {
  const prisma = PRISMA_CLIENT;

  try {
    const file = await prisma.file.findUniqueOrThrow({
      where: {
        id,
      },
      include: {
        iM: true,
      },
    });

    return file;
  } catch (error) {
    throw error;
  }
}
