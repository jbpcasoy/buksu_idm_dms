import deleteFile from "@/services/api/file/deleteFile";

export default async function deleteFileHandler(req, res) {
  const { id } = req.query;
  const deletedFile = await deleteFile(id);

  return res.status(200).json(deletedFile);
}
