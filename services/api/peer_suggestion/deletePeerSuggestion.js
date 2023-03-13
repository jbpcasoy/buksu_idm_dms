import { PrismaClient } from "@prisma/client";

export default async function deletePeerSuggestion(id) {
  const prisma = new PrismaClient();
  try {
    const peerSuggestion = await prisma.peerSuggestion.delete({
      where: {
        id,
      },
    });
    return peerSuggestion;
  } catch (error) {
    throw error;
  }
}
