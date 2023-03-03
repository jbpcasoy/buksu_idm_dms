import readIMs from "../../api/im/readIMs";

export default async function getImsHandler(req, res) {
  const {
    page,
    limit,
    serialNumber,
    title,
    status,
    ownerId,
    notOwnerId,
    departmentId,
  } = req.query;
  const ims = await readIMs({
    limit: parseInt(limit),
    page: parseInt(page),
    serialNumber,
    title,
    status,
    ownerId,
    notOwnerId,
    departmentId,
  });

  return res.status(200).json(ims);
}
