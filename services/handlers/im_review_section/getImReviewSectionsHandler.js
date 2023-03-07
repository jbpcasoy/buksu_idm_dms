import readIMReviewSections from "@/services/api/im_review_section/readIMReviewSections";

export default async function getImReviewSectionsHandler(req, res) {
  const { limit, page } = req.query;

  const iMReviewSections = await readIMReviewSections({
    limit: limit ? parseInt(limit) : undefined,
    page: page ? parseInt(page) : undefined,
  });
  return res.status(200).json(iMReviewSections);
}
