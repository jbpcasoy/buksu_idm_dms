import createActiveChairperson from "@/services/api/active_chairperson/createActiveChairperson";

export default async function postActiveChairpersonHandler(req, res) {
  const { chairpersonId, departmentId } = req.body;

  const chairperson = await createActiveChairperson({
    chairpersonId,
    departmentId,
  });
  return res.status(201).json(chairperson);
}
