import readActiveFile from "@/services/api/active_file/readActiveFile";

export default async function getActiveFileHandler(req, res) {
  const { id } = req.query;

  const activeFile = await readActiveFile(id);
  return res.status(200).json(activeFile);
}
