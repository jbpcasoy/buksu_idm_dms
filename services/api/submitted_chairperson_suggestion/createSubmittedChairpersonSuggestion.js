import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import readChairpersonSuggestion from "../chairperson_suggestion/readChairpersonSuggestion";

export default async function createSubmittedChairpersonSuggestion({
  chairpersonSuggestionId,
}) {
  try {
    const prisma = PRISMA_CLIENT;

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
          Notification: {
            create: {
              Type: "SUBMITTED_CHAIRPERSON_SUGGESTION",
            },
          },
        },
      });
    return submittedChairpersonSuggestion;
  } catch (error) {
    throw error;
  }
}
