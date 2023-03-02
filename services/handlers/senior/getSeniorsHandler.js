import readSeniors from "@/services/api/senior/readSeniors";

export default async function getSeniorsHandler(req, res) {
  const { limit, page, name, departmentName, collegeName, active } = req.query;

  const seniors = await readSeniors({
    limit: parseInt(limit),
    page: parseInt(page),
    name,
    departmentName,
    collegeName,
    active: active ? JSON.parse(active) : undefined,
  });
  return res.status(200).json(seniors);
}
