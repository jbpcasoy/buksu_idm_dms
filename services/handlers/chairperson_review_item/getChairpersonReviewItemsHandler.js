import readChairpersonReviewItems from "@/services/api/chairperson_review_item/readChairpersonReviewItems";

export default async function getChairpersonReviewItemsHandler(req, res) {
  const { limit = 10, page = 1 } = req.query;

  const chairpersonReviewItems = await readChairpersonReviewItems({
    limit: parseInt(limit),
    page: parseInt(page),
  });
  return res.status(200).json(chairpersonReviewItems);
}
