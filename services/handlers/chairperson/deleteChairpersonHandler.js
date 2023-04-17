import userAbility from "@/services/abilities/defineAbility";
import deleteChairperson from "@/services/api/chairperson/deleteChairperson";
import readChairperson from "@/services/api/chairperson/readChairperson";
import getServerUser from "@/services/helpers/getServerUser";
import statusError from "@/services/helpers/throwError";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function deleteChairpersonHandler(req, res) {
  const { id } = req.query;

  async function findSubject({ id }) {
    const user = await getServerUser(req, res);

    const subject = await readChairperson({
      id,
      ability: await userAbility(user),
    });
    return subject;
  }

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const chairperson = await deleteChairperson(id);
      return res.status(200).json(chairperson);
    },
    action: "delete",
    subject: await findSubject({ id }),
    fields: undefined,
    type: "Chairperson",
  });
}
