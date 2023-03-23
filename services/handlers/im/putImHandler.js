import updateIM from "@/services/api/im/updateIM";

export default async function putImHandler(req, res) {
  const { id } = req.query;
  const { title, serialNumber, status, type } = req.body;
  const updatedIm = await updateIM(id, { title, serialNumber, status, type });

  return res.status(200).json(updatedIm);
}
