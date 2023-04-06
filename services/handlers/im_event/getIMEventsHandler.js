import readIMEvents from "@/services/api/im_event/readIMEvents";

export default async function getIMEventsHandler(req, res) {
  const { limit, page, iMId } = req.query;

  const iMEvents = await readIMEvents({
    limit: parseInt(limit),
    page: parseInt(page),
    iMId,
  });
  return res.status(200).json(iMEvents);
}
