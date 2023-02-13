const { PrismaClient } = require("@prisma/client");

export default async function createFile({
  fileName,
  originalFileName,
  iMId,
  googleDocsUrl,
}) {
  const prisma = new PrismaClient();

  try {
    const file = await prisma.file.create({
      data: {
        originalFileName,
        fileName,
        iMId,
        googleDocsUrl,
      },
    });
    return file;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
