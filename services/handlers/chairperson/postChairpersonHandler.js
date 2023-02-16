import createChairperson from "@/services/api/chairperson/createChairperson";

export default async function postChairpersonHandler(req, res) {
  const { facultyId } = req.body;

  const chairperson = await createChairperson({ facultyId });
  return res.status(201).json(chairperson);
}
