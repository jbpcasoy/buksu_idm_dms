import readChairpersons from "@/services/api/chairperson/readChairpersons";

export default async function getChairpersonsHandler(req, res) {
  const { limit, page, name, departmentName, collegeName, active } = req.query;

  const chairpersons = await readChairpersons({
    limit: parseInt(limit),
    page: parseInt(page),
    name,
    departmentName,
    collegeName,
    active: active ? JSON.parse(active) : undefined,
  });

  res.status(200).json(chairpersons);
}
