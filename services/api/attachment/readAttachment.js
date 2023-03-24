import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readAttachment(id) {
  const prisma = PRISMA_CLIENT;

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
