import userAbility from "@/services/abilities/defineAbility";
import deleteActiveDean from "@/services/api/active_dean/deleteActiveDean";
import readActiveDean from "@/services/api/active_dean/readActiveDean";
import getServerUser from "@/services/helpers/getServerUser";
import statusError from "@/services/helpers/throwError";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function deleteActiveDeanHandler(req, res) {
  const { id } = req.query;

  async function findSubject({ id }) {
    const user = await getServerUser(req, res);

    const subject = await readActiveDean({
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
        const activeDean = await deleteActiveDean(id);
        return res.status(200).json(activeDean);
      },
      action: "delete",
      subject: await findSubject({ id }),
      fields: undefined,
      type: "ActiveDean",
    });
  } catch (error) {
    return res
      .status(error?.statusCode ?? 500)
      .json({ message: error?.message });
  }
}
