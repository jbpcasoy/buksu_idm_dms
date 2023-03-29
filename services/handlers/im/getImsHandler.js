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
  });

  return res.status(200).json(ims);
}
