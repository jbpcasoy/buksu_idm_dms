import deleteActiveFile from "@/services/api/active_file/deleteActiveFile";

export default async function deleteActiveFileHandler(req, res) {
  const { id } = req.query;

  const activeHandler = await deleteActiveFile(id);
  return res.status(200).json(activeHandler);
}
