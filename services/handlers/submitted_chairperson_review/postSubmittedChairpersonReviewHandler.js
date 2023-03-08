import createSubmittedChairpersonReview from "@/services/api/submitted_chairperson_review/createSubmittedChairpersonReview";

export default async function postSubmittedChairpersonReviewHandler(req, res) {
  const { chairpersonReviewId } = req.body;

  const submittedChairpersonReview = await createSubmittedChairpersonReview({
    chairpersonReviewId,
  });
  return res.status(201).json(submittedChairpersonReview);
}
