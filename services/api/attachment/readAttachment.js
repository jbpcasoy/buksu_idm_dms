import { PrismaClient } from "@prisma/client";

export default async function readAttachment(id) {
  const prisma = new PrismaClient();

  try {
    const attachment = await prisma.attachment.findUniqueOrThrow({
      where: {
        id,
      },
    });
    return attachment;
  } catch (error) {
    throw error;
  }
}
