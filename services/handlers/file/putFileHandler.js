import updateFile from "@/services/api/file/updateFile";

export default async function putFileHandler(req, res) {
  const { id } = req.query;
  const { googleDocsUrl } = req.body;
  const updatedFile = await updateFile(id, { googleDocsUrl });

  return res.status(200).json(updatedFile);
}
