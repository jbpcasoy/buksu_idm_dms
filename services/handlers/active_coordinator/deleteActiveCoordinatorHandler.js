import userAbility from "@/services/abilities/defineAbility";
import deleteActiveCoordinator from "@/services/api/active_coordinator/deleteActiveCoordinator";
import readActiveCoordinator from "@/services/api/active_coordinator/readActiveCoordinator";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function deleteActiveCoordinatorHandler(req, res) {
  const { id } = req.query;

  async function findSubject({ id }) {
    const user = await getServerUser(req, res);

    const subject = await readActiveCoordinator({
      id,
      ability: await userAbility(user),
    });
    return subject;
  }

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const activeCoordinator = await deleteActiveCoordinator(id);
      return res.status(200).json(activeCoordinator);
    },
    action: "delete",
    subject: await findSubject({ id }),
    fields: undefined,
    type: "ActiveCoordinator",
  });
}
