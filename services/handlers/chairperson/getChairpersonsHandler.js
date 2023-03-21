import readChairpersons from "@/services/api/chairperson/readChairpersons";

export default async function getChairpersonsHandler(req, res) {
  const {
    limit,
    page,
    name,
    departmentName,
    collegeName,
    active,
    sortColumn = "Faculty.user.name",
    sortOrder = "asc",
  } = req.query;

  const chairpersons = await readChairpersons({
    limit: parseInt(limit),
    page: parseInt(page),
    name,
    departmentName,
    collegeName,
    active: active ? JSON.parse(active) : undefined,
    sortColumn,
    sortOrder,
  });

  res.status(200).json(chairpersons);
}
