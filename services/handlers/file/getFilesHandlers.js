import readFiles from "@/services/api/file/readFiles";

export default async function getFilesHandler(req, res) {
  const { page = 1, limit = 10 } = req.query;
  const files = await readFiles({
    limit: parseInt(limit),
    page: parseInt(page),
  });
  return res.status(200).json(files);
}
