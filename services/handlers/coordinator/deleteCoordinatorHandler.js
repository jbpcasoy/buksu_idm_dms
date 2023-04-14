import userAbility from "@/services/abilities/defineAbility";
import deleteCoordinator from "@/services/api/coordinator/deleteCoordinator";
import readCoordinator from "@/services/api/coordinator/readCoordinator";
import getServerUser from "@/services/helpers/getServerUser";
import statusError from "@/services/helpers/throwError";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function deleteCoordinatorHandler(req, res) {
  const { id } = req.query;

  async function findSubject({ id }) {
    const user = await getServerUser(req, res);
    try {
      const subject = await readCoordinator({
        id,
        ability: await userAbility(user),
      });
      return subject;
    } catch (error) {
      console.log(error);
      throw statusError({
        statusCode: 403,
        message: "Unauthorized, cannot delete Coordinator",
      });
    }
  }

  try {
    return abilityValidator({
      req,
      res,
      next: async (req, res) => {
        const coordinator = await deleteCoordinator(id);
        return res.status(200).json(coordinator);
      },
      action: "delete",
      subject: await findSubject({ id }),
      fields: undefined,
      type: "Coordinator",
    });
  } catch (error) {
    return res
      .status(error?.statusCode ?? 500)
      .json({ message: error?.message });
  }
}
