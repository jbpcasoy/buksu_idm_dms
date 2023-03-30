import createFile from "@/services/api/file/createFile";

export default async function postFileHandler(req, res) {
  const { fileName, originalFileName, iMId, googleDocsUrl } = req.body;

  const file = await createFile({
    fileName,
    originalFileName,
    iMId,
    googleDocsUrl,
  });
  return res.status(201).json(file);
}
