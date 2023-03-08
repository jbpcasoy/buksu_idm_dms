import readChairpersonReviewItem from "@/services/api/chairperson_review_item/readChairpersonReviewItem";

export default async function getChairpersonReviewItemHandler(req, res) {
  const { id } = req.query;

  const chairpersonReviewItem = await readChairpersonReviewItem(id);
  return res.status(200).json(chairpersonReviewItem);
}
