import createAttachment from "@/services/api/attachment/createAttachment";

export default async function postAttachmentHandler(req, res) {
  const { fileName, originalFileName } = req.body;

  const attachment = await createAttachment({ fileName, originalFileName });
  return res.status(201).json(attachment);
}
