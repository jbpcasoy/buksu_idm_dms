import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import updateIM from "../im/updateIM";

const { PrismaClient } = require("@prisma/client");

export default async function createFile(
  { fileName, originalFileName, iMId, googleDocsUrl },
  ability
) {
  const prisma = PRISMA_CLIENT;

  const file = await prisma.file.create({
    data: {
      originalFileName,
      fileName,
      iM: {
        connect: {
          id: iMId,
        },
      },
      googleDocsUrl,
      IMEvent: {
        create: {
          IM: {
            connect: {
              id: iMId,
            },
          },
          IMEventType: "NEW_VERSION",
        },
      },
    },
  });

  await updateIM(
    iMId,
    {
      updatedAt: new Date(),
    },
    ability
  );
  return file;
}
