import readChairpersons from "@/services/api/chairperson/readChairpersons";

export default async function getChairpersonsHandler(req, res) {
  const { limit, page, name, departmentName, collegeName } = req.query;

  const chairpersons = await readChairpersons({
    limit: parseInt(limit),
    page: parseInt(page),
    name,
    departmentName,
    collegeName,
  });

  res.status(200).json(chairpersons);
}
