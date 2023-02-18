import { PrismaClient } from "@prisma/client";

export default async function createAttachment({ fileName, originalFileName }) {
  const prisma = new PrismaClient();

  try {
    const attachment = await prisma.attachment.create({
      data: {
        fileName,
        originalFileName,
      },
    });

    return attachment;
  } catch (error) {
    throw error;
  }
}
