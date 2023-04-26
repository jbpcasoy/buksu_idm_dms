import axios from "axios";

export default async function frontendGetIMs({
  limit,
  page,
  ownerId,
  status,
  serialNumber,
  title,
  notOwnerId,
  departmentId,
  reviewerId,
  sortColumn,
  sortOrder,
  coordinatorEndorsed,
  deanEndorsed,
  collegeId,
  endorsedByDean,
  endorsedByCoordinator,
  authors,
  type,
  owner,
  iMDCoordinatorReviewerId,
  toRevise,
  iMDCoordinatorEndorsed,
  endorsedByIMDCoordinator,
  CITLDirectorEndorsed,
  endorsedByCITLDirector,
}) {
  try {
    const response = await axios.get("/api/im", {
      params: {
        limit,
        page,
        ownerId,
        status,
        serialNumber,
        title,
        notOwnerId,
        departmentId,
        reviewerId,
        sortColumn,
        sortOrder,
        coordinatorEndorsed,
        deanEndorsed,
        collegeId,
        endorsedByDean,
        endorsedByCoordinator,
        authors,
        type,
        owner,
        iMDCoordinatorReviewerId,
        toRevise,
        iMDCoordinatorEndorsed,
        endorsedByIMDCoordinator,
        CITLDirectorEndorsed,
        endorsedByCITLDirector,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    // throw error;
    return { data: [], total: 0 };
  }
}
