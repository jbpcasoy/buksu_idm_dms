import updateIMReviewQuestion from "@/services/api/im_review_question/updateIMReviewQuestion";

export default async function putImReviewQuestionHandler(req, res) {
  const { id } = req.query;
  const { question } = req.body;

  const iMReviewQuestion = await updateIMReviewQuestion(id, { question });

  return res.status(200).json(iMReviewQuestion);
}
