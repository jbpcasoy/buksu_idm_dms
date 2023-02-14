import deleteIm from "@/services/api/im/deleteIM";

export default async function deleteImHandler(req, res) {
  const { id } = req.query;
  const deletedIm = await deleteIm(id);

  return res.status(200).json(deletedIm);
}
