import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function updateChairpersonSuggestionItem(
  id,
  { value, pageNumber, actionTaken, remarks }
) {
  const prisma = PRISMA_CLIENT;

  const chairpersonSuggestionItem =
    await prisma.chairpersonSuggestionItem.update({
      where: {
        id,
      },
      data: { actionTaken, pageNumber, remarks, value },
    });

  return chairpersonSuggestionItem;
}
