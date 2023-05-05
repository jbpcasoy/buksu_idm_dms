import userAbility from "@/services/abilities/defineAbility";
import readDepartment from "@/services/api/department/readDepartment";
import updateDocument from "@/services/api/department/updateDocument";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";

export default async function putDepartmentHandler(req, res) {
  const { id } = req.query;
  const { name } = req.body;

  async function findSubject({ id }) {
    const user = await getServerUser(req, res);

    const subject = await readDepartment({
      id,
      ability: await userAbility(user),
    });
    return subject;
  }

  const user = await getServerUser(req, res);
  const department = await findSubject({ id });
  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const department = await updateDocument(id, {
        name,
      });

      return res.status(200).json(department);
    },
    action: "update",
    subject: subject("Department", department),
    fields: undefined,
    type: "Department",
  });
}
