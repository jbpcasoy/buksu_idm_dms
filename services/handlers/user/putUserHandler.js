import putUser from "@/services/api/user/putUser";

export default async function putUserHandler(req, res) {
  const { id } = req.query;
  const { name, image } = req.body;

  const user = await putUser(id, {
    name,
    image,
  });

  return res.status(200).json(user);
}
