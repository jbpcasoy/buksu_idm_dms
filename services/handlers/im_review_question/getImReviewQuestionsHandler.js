import readIMReviewQuestions from "@/services/api/im_review_question/readIMReviewQuestions";

export default async function getImReviewQuestionsHandler(req, res) {
  const { limit, page, iMReviewSectionId } = req.query;

  const imReviewQuestions = await readIMReviewQuestions({
    limit: parseInt(limit),
    page: parseInt(page),
    iMReviewSectionId,
  });

  return res.status(200).json(imReviewQuestions);
}
