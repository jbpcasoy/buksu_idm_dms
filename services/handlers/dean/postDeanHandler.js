import createDean from "@/services/api/dean/createDean";

export default async function postDeanHandler(req, res) {
  const { facultyId } = req.body;

  const dean = await createDean({ facultyId });
  return res.status(201).json(dean);
}
