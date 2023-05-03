import axios from "axios";

export default async function frontendGetIMCount({
  year,
  collegeId,
  status,
  departmentId,
}) {
  const count = await axios.get("/api/chart/im", {
    params: {
      year,
      collegeId,
      status,
      departmentId,
    },
  });

  return count.data;
}
