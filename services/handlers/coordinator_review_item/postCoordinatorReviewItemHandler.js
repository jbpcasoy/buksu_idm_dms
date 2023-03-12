import createCoordinatorReviewItem from "@/services/api/coordinator_review_item/createCoordinatorReviewItem";

export default async function postCoordinatorReviewItemHandler(req, res) {
  const { coordinatorReviewId, answer, questionId } = req.body;

  const coordinatorReviewItem = await createCoordinatorReviewItem({
    coordinatorReviewId,
    answer,
    questionId,
  });
  return res.status(201).json(coordinatorReviewItem);
}
