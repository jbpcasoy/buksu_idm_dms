import { PrismaClient } from "@prisma/client";
import readChairpersonSuggestion from "../chairperson_suggestion/readChairpersonSuggestion";

export default async function createSubmittedChairpersonSuggestion({
  chairpersonSuggestionId,
}) {
  try {
    const prisma = new PrismaClient();

    const chairpersonSuggestion = await readChairpersonSuggestion(
      chairpersonSuggestionId
    );

    const submittedChairpersonSuggestion =
      await prisma.submittedChairpersonSuggestion.create({
        data: {
          ChairpersonSuggestion: {
            connect: {
              id: chairpersonSuggestion.id,
            },
          },
          IM: {
            connect: {
              id: chairpersonSuggestion.SubmittedChairpersonReview.iMId,
            },
          },
        },
      });
    return submittedChairpersonSuggestion;
  } catch (error) {
    throw error;
  }
}
