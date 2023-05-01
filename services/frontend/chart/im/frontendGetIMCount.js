import axios from "axios";

export default async function frontendGetIMCount({ year, collegeId, status }) {
  const count = await axios.get("/api/chart/im", {
    params: {
      year,
      collegeId,
      status,
    },
  });

  return count.data;
}
