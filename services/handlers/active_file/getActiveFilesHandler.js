import readActiveFiles from "@/services/api/active_file/readActiveFiles";

export default async function getActivesFileHandler(req, res) {
  const { limit, page } = req.query;

  const activeFiles = await readActiveFiles({
    limit: parseInt(limit),
    page: parseInt(page),
  });

  return res.status(200).json(activeFiles);
}
