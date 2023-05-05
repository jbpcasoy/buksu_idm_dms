import userAbility from "@/services/abilities/defineAbility";
import deleteActiveChairperson from "@/services/api/active_chairperson/deleteActiveChairperson";
import readActiveChairperson from "@/services/api/active_chairperson/readActiveChairperson";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function deleteActiveChairpersonHandler(req, res) {
  const { id } = req.query;

  async function findSubject({ id }) {
    const user = await getServerUser(req, res);

    const subject = await readActiveChairperson({
      id,
      ability: await userAbility(user),
    });
    return subject;
  }

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const activeChairperson = await deleteActiveChairperson(id);
      return res.status(200).json(activeChairperson);
    },
    action: "delete",
    subject: await findSubject({ id }),
    fields: undefined,
    type: "ActiveChairperson",
  });
}
