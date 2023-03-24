import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteAttachment(id) {
  const prisma = PRISMA_CLIENT;

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
