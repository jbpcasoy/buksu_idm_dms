import createIMReviewQuestion from "@/services/api/im_review_question/createIMReviewQuestion";

export default async function postImReviewQuestionHandler(req, res) {
  const { iMReviewSectionId, question } = req.body;

  const iMReviewQuestion = await createIMReviewQuestion({
    iMReviewSectionId,
    question,
  });
  return res.status(201).json(iMReviewQuestion);
}
