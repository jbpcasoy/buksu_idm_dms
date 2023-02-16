import createActiveChairperson from "@/services/api/active_chairperson/createActiveChairperson";

export default async function postActiveChairpersonHandler(req, res) {
  const { departmentId, chairpersonId } = req.body;

  const chairperson = await createActiveChairperson({
    departmentId,
    chairpersonId,
  });
  return res.status(201).json(chairperson);
}
