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
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
