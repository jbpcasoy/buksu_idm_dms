import createActiveDean from "@/services/api/active_dean/createActiveDean";

export default async function postActiveDeanHandler(req, res) {
  const { deanId } = req.body;

  const activeDean = await createActiveDean({ deanId });
  return res.status(201).json(activeDean);
}
