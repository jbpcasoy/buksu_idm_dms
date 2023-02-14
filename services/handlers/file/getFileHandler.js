import readFile from "@/services/api/file/readFile";

export default async function getFileHandler(req, res) {
  const { id } = req.query;
  const foundFile = await readFile(id);

  return res.status(200).json(foundFile);
}
