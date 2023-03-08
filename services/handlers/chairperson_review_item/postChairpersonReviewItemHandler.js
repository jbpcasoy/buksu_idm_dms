import createChairpersonReviewItem from "@/services/api/chairperson_review_item/createChairpersonReviewItem";

export default async function postChairpersonReviewItemHandler(req, res) {
  const { questionId, answer, chairpersonReviewId } = req.body;

  const chairpersonReviewItem = await createChairpersonReviewItem({
    questionId,
    answer,
    chairpersonReviewId,
  });
  return res.status(201).json(chairpersonReviewItem);
}
