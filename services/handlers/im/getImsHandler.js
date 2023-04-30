import userAbility from "@/services/abilities/defineAbility";
import readIMs from "../../api/im/readIMs";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getImsHandler(req, res) {
  const {
    page,
    departmentName,
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
    endorsedByCITLDirector,
    collegeName,
  } = req.query;
  const user = await getServerUser(req, res);

  const ims = await readIMs({
    limit: parseInt(limit),
    page: parseInt(page),
    serialNumber,
    title,
    status,
    ownerId,
    departmentName,
    collegeName,
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
    endorsedByCITLDirector,
    ability: await userAbility(user),
  });

  return res.status(200).json(ims);
}
