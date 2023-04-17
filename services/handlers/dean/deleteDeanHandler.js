import userAbility from "@/services/abilities/defineAbility";
import deleteDean from "@/services/api/dean/deleteDean";
import readDean from "@/services/api/dean/readDean";
import getServerUser from "@/services/helpers/getServerUser";
import statusError from "@/services/helpers/throwError";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function deleteDeanHandler(req, res) {
  const { id } = req.query;

  async function findSubject({ id }) {
    const user = await getServerUser(req, res);

    const subject = await readDean({
      id,
      ability: await userAbility(user),
    });
    return subject;
  }

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const dean = await deleteDean(id);
      return res.status(200).json(dean);
    },
    action: "delete",
    subject: await findSubject({ id }),
    fields: undefined,
    type: "Dean",
  });
}
