import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteChairpersonSuggestion(id) {
  const prisma = PRISMA_CLIENT;

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
