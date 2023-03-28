import updateActiveFile from "@/services/api/active_file/updateActiveFile";

export default async function putActiveFileHandler(req, res) {
  const { id } = req.query;
  const { iMId, fileId } = req.body;

  const activeFile = await updateActiveFile(id, {
    iMId,
    fileId,
  });

  return res.status(200).json(activeFile);
}
