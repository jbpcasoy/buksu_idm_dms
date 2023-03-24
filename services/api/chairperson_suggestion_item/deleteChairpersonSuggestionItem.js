import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteChairpersonSuggestionItem(id) {
  const prisma = PRISMA_CLIENT;
  try {
    const chairpersonSuggestionItem =
      await prisma.chairpersonSuggestionItem.delete({
        where: {
          id,
        },
      });
    return chairpersonSuggestionItem;
  } catch (error) {
    throw error;
  }
}
