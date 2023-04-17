import userAbility from "@/services/abilities/defineAbility";
import deleteDepartment from "@/services/api/department/deleteDepartment";
import readDepartment from "@/services/api/department/readDepartment";
import getServerUser from "@/services/helpers/getServerUser";
import statusError from "@/services/helpers/throwError";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function deleteDepartmentHandler(req, res) {
  const { id } = req.query;

  async function findSubject({ id }) {
    const user = await getServerUser(req, res);
    const subject = await readDepartment({
      id,
      ability: await userAbility(user),
    });
    return subject;
  }

  try {
    return abilityValidator({
      req,
      res,
      next: async (req, res) => {
        const department = await deleteDepartment(id);

        return res.status(200).json(department);
      },
      action: "delete",
      subject: await findSubject({ id }),
      fields: undefined,
      type: "Department",
    });
  } catch (error) {
    return res
      .status(error?.statusCode ?? 500)
      .json({ message: error?.message });
  }
}
