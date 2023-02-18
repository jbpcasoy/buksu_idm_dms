import { PrismaClient } from "@prisma/client";

export default async function readAttachments({ limit, page }) {
  const prisma = new PrismaClient();

  try {
    const attachments = await prisma.attachment.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });

    return attachments;
  } catch (error) {
    throw error;
  }
}
