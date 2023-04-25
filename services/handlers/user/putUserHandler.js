import userAbility from "@/services/abilities/defineAbility";
import putUser from "@/services/api/user/putUser";
import readUser from "@/services/api/user/readUser";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";
import { permittedFieldsOf } from "@casl/ability/extra";
import _ from "lodash";

export default async function putUserHandler(req, res) {
  const { id } = req.query;
  const { name, image } = req.body;
  const serverUser = await getServerUser(req, res);
  const ability = await userAbility(serverUser);

  async function findSubject({ id }) {
    const subject = await readUser({
      id,
      ability: ability,
    });
    return subject;
  }

  const user = await findSubject({ id });
  const caslSubject = subject("User", user);
  const fields = permittedFieldsOf(ability, "update", caslSubject, {
    fieldsFrom: (rule) => rule.fields || ["name", "image"],
  });
  const data = _.pick({ name, image }, fields);

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const updatedUser = await putUser(id, data);

      return res.status(200).json(updatedUser);
    },
    action: "update",
    subject: caslSubject,
    fields: Object.keys(data),
    type: "User",
  });
}
