import readIMs from "../../api/im/readIMs";

export default async function getImsHandler(req, res) {
  const { page = 1, limit = 10 } = req.query;
  const ims = await readIMs({
    limit: parseInt(limit),
    page: parseInt(page),
  });

  return res.status(200).json(ims);
}
