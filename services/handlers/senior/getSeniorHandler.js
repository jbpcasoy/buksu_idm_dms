import readSenior from "@/services/api/senior/readSenior";

export default async function getSeniorHandler(req, res) {
  const { id } = req.query;

  const senior = await readSenior(id);
  return res.status(200).json(senior);
}
