import readIMReviewQuestion from "@/services/api/im_review_question/readIMReviewQuestion";

export default async function getImReviewQuestionHandler(req, res) {
  const { id } = req.query;

  const iMReviewQuestion = await readIMReviewQuestion(id);
  return res.status(200).json(iMReviewQuestion);
}
