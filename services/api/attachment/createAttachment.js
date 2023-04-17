import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createAttachment({ fileName, originalFileName }) {
  const prisma = PRISMA_CLIENT;

  const attachment = await prisma.attachment.create({
    data: {
      fileName,
      originalFileName,
    },
  });

  return attachment;
}
