import readChairpersonReviewItems from "@/services/api/chairperson_review_item/readChairpersonReviewItems";

export default async function getChairpersonReviewItemsHandler(req, res) {
  const { limit, page, questionId, chairpersonReviewId } = req.query;

  const chairpersonReviewItems = await readChairpersonReviewItems({
    limit: limit ? parseInt(limit) : undefined,
    page: page ? parseInt(page) : undefined,
    questionId,
    chairpersonReviewId,
  });
  return res.status(200).json(chairpersonReviewItems);
}
