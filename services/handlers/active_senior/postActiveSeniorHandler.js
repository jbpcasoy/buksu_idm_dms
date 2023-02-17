import createActiveSenior from "@/services/api/active_senior/createActiveSenior";

export default async function postActiveSeniorHandler(req, res) {
  const { seniorId, departmentId } = req.body;

  const activeSenior = await createActiveSenior({
    seniorId,
    departmentId,
  });
  return res.status(201).json(activeSenior);
}
