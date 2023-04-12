import readIMEvent from "@/services/api/im_event/readIMEvent";

export default async function getIMEventHandler(req, res) {
  const { id } = await req.query;

  const iMEvent = await readIMEvent(id);
  return res.status(200).json(iMEvent);
}
