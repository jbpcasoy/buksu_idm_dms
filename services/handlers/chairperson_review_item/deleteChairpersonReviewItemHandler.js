import deleteChairpersonReviewItem from "@/services/api/chairperson_review_item/deleteChairpersonReviewItem";

export default async function deleteChairpersonReviewItemHandler(req, res) {
  const { id } = req.query;

  const chairpersonReviewItem = await deleteChairpersonReviewItem(id);
  return res.status(200).json(chairpersonReviewItem);
}
