import { PrismaClient } from "@prisma/client";

export default async function deleteAttachment(id) {
  const prisma = new PrismaClient();

  try {
    const attachment = await prisma.attachment.delete({
      where: {
        id,
      },
    });

    return attachment;
  } catch (error) {
    throw error;
  }
}
