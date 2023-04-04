import readIMs from "../../api/im/readIMs";

export default async function getImsHandler(req, res) {
  const {
    page,
    limit,
    serialNumber,
    title,
    status,
    ownerId,
    notOwnerId,
    departmentId,
    reviewerId,
    sortColumn = "title",
    sortOrder = "asc",
    type,
    coordinatorEndorsed,
    deanEndorsed,
    collegeId,
    endorsedByDean,
    endorsedByCoordinator,
    authors,
    owner,
    iMDCoordinatorReviewerId,
    toRevise,
    iMDCoordinatorEndorsed,
    endorsedByIMDCoordinator,
    CITLDirectorEndorsed,
    endorsedByCITLDirector,
  } = req.query;
  const ims = await readIMs({
    limit: parseInt(limit),
    page: parseInt(page),
    serialNumber,
    title,
    status,
    ownerId,
    notOwnerId,
    departmentId,
    reviewerId,
    sortColumn,
    sortOrder,
    type,
    coordinatorEndorsed: coordinatorEndorsed
      ? JSON.parse(coordinatorEndorsed)
      : undefined,
    deanEndorsed: deanEndorsed ? JSON.parse(deanEndorsed) : undefined,
    collegeId,
    endorsedByDean,
    endorsedByCoordinator,
    authors,
    owner,
    iMDCoordinatorReviewerId,
    toRevise: toRevise ? JSON.parse(toRevise) : undefined,
    iMDCoordinatorEndorsed: iMDCoordinatorEndorsed
      ? JSON.parse(iMDCoordinatorEndorsed)
      : undefined,
    endorsedByIMDCoordinator,
    CITLDirectorEndorsed: CITLDirectorEndorsed
      ? JSON.parse(CITLDirectorEndorsed)
      : undefined,
    endorsedByCITLDirector,
  });

  return res.status(200).json(ims);
}
