import deleteAttachment from "@/services/api/attachment/deleteAttachment";

export default async function deleteAttachmentHandler(req, res) {
  const { id } = req.query;

  const attachment = await deleteAttachment(id);
  return res.status(200).json(attachment);
}
