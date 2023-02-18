import readAttachments from "@/services/api/attachment/readAttachments";

export default async function getAttachmentHandler(req, res) {
  const { limit, page } = req.query;

  const attachments = await readAttachments({
    limit: parseInt(limit),
    page: parseInt(page),
  });

  return res.status(200).json(attachments);
}
