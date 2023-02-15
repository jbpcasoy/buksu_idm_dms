import updateDocument from "@/services/api/department/updateDocument";

export default async function putDepartmentHandler(req, res) {
  const { id } = req.query;
  const { name } = req.body;

  const department = await updateDocument(id, {
    name,
  });

  return res.status(200).json(department);
}
