import updateChairpersonReviewItem from "@/services/api/chairperson_review_item/updateChairpersonReviewItem";

export default async function putChairpersonReviewItemHandler(req, res) {
  const { answer } = req.body;
  const { id } = req.query;

  const chairpersonReviewItem = await updateChairpersonReviewItem(id, {
    answer,
  });
  return res.status(200).json(chairpersonReviewItem);
}
