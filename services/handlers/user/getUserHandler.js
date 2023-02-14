import readUser from "@/services/api/user/readUser";

export default async function getUserHandler(req, res) {
  const { id } = req.query;

  const user = await readUser(id);

  return res.status(200).json(user);
}
