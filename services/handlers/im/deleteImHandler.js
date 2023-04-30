import userAbility from "@/services/abilities/defineAbility";
import deleteIm from "@/services/api/im/deleteIM";
import readIM from "@/services/api/im/readIM";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function deleteImHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  async function findSubject({ id }) {
    const subject = await readIM({
      id,
      ability: await userAbility(user),
    });
    return subject;
  }

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const deletedIm = await deleteIm(id);

      return res.status(200).json(deletedIm);
    },
    action: "delete",
    subject: await findSubject({ id }),
    fields: undefined,
    type: "Faculty",
  });
}
