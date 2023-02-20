import deleteActiveChairperson from "@/services/api/active_chairperson/deleteActiveChairperson";

export default async function deleteActiveChairpersonHandler(req, res) {
  const { id } = req.query;

  const activeChairperson = await deleteActiveChairperson(id);
  return res.status(200).json(activeChairperson);
}
