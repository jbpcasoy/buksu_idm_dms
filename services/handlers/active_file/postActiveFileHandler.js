import createActiveFile from "@/services/api/active_file/createActiveFile";

export default async function postActiveFileHandler(req, res) {
  const { fileId, iMId } = req.body;

  const activeFile = await createActiveFile({ fileId, iMId });
  return res.status(201).json(activeFile);
}
