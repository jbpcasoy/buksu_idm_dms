import readAttachment from "@/services/api/attachment/readAttachment";

export default async function getAttachmentsHandler(req, res) {
  const { id } = req.query;

  const attachment = await readAttachment(id);
  return res.status(200).json(attachment);
}
