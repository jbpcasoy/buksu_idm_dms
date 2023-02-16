import deleteSenior from "@/services/api/senior/deleteSenior";

export default async function deleteSeniorHandler(req, res) {
  const { id } = req.query;

  const senior = await deleteSenior(id);
  return res.status(200).json(senior);
}
