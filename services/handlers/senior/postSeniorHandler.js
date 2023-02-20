import createSenior from "@/services/api/senior/createSenior";

export default async function postSeniorHandler(req, res) {
  const { facultyId } = req.body;

  const senior = await createSenior({ facultyId });
  return res.status(201).json(senior);
}
