import countIM from "@/services/api/chart/im/countIM";

export default async function getChartImHandler(req, res) {
  const { status, year, collegeId, departmentId } = req.query;

  const count = await countIM({ status, year, collegeId, departmentId });
  return res.status(200).send(count);
}
