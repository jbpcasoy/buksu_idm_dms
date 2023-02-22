import readUsers from "@/services/api/user/readUsers";

export default async function getUsersHandler(req, res) {
  const { page, limit, name} = req.query;

  const users = await readUsers({
    limit: parseInt(limit),
    page: parseInt(page),
    name
  });

  return res.status(200).json(users);
}
