import createActiveSenior from "@/services/api/active_senior/createActiveSenior";

export default async function postActiveSeniorHandler(req, res) {
  const { departmentId, seniorId } = req.body;

  const activeSenior = await createActiveSenior({
    departmentId,
    seniorId,
  });
  return res.status(201).json(activeSenior);
}
