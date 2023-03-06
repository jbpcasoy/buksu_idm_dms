import deleteImReviewQuestion from "@/services/api/im_review_question/deleteImReviewQuestion";

export default async function deleteImReviewQuestionHandler(req, res) {
  const { id } = req.query;

  const iMReviewQuestion = await deleteImReviewQuestion(id);
  return res.status(200).json(iMReviewQuestion);
}
