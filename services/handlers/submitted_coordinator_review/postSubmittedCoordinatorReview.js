import createSubmittedCoordinatorReview from "@/services/api/submitted_coordinator_review/createSubmittedCoordinatorReview";

export default async function postSubmittedCoordinatorReview(req, res) {
  const { coordinatorReviewId } = req.body;

  const submittedCoordinatorReview = await createSubmittedCoordinatorReview({
    coordinatorReviewId,
  });
  return res.status(201).json(submittedCoordinatorReview);
}
