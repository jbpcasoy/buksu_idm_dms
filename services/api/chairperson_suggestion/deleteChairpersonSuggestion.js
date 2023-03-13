import { PrismaClient } from "@prisma/client";

export default async function deleteChairpersonSuggestion(id) {
  const prisma = new PrismaClient();

  try {
    const chairpersonSuggestion = await prisma.chairpersonSuggestion.delete({
      where: {
        id,
      },
    });
    return chairpersonSuggestion;
  } catch (error) {
    throw error;
  }
}
