import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteAttachment(id) {
  const prisma = PRISMA_CLIENT;

  const attachment = await prisma.attachment.delete({
    where: {
      id,
    },
  });

  return attachment;
}
