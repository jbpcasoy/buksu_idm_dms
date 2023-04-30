import createDepartment from "@/services/api/department/createDepartment";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function postDepartmentHandler(req, res) {
  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const { name, collegeId } = req.body;

      const department = await createDepartment({ name, collegeId });

      return res.status(201).json(department);
    },
    action: "create",
    subject: "Department",
    fields: undefined,
    type: "Department",
  });
}
