import { PRISMA_CLIENT } from "@/prisma/prisma_client";

const { PrismaClient } = require("@prisma/client");

export default async function createFile({
  fileName,
  originalFileName,
  iMId,
  googleDocsUrl,
}) {
  const prisma = PRISMA_CLIENT;

  const file = await prisma.file.create({
    data: {
      originalFileName,
      fileName,
      iMId,
      googleDocsUrl,
      IMEvent: {
        create: {
          IMEventType: "NEW_VERSION",
        },
      },
    },
  });
  return file;
}
