import readIM from "@/services/api/im/readIM";

export default async function getImHandler(req, res) {
  const { id } = req.query;
  const foundIM = await readIM(id);

  return res.status(200).json(foundIM);
}
