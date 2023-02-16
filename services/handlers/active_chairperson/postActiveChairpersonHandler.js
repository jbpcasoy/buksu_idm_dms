import createActiveChairperson from "@/services/api/active_chairperson/createActiveChairperson";

export default async function postActiveChairpersonHandler(req, res) {
  const { chairpersonId } = req.body;

  const chairperson = await createActiveChairperson({
    chairpersonId,
  });
  return res.status(201).json(chairperson);
}
