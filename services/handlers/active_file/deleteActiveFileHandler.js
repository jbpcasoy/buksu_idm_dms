import userAbility from "@/services/abilities/defineAbility";
import deleteActiveFile from "@/services/api/active_file/deleteActiveFile";
import readActiveFile from "@/services/api/active_file/readActiveFile";
import getServerUser from "@/services/helpers/getServerUser";
import statusError from "@/services/helpers/throwError";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";

export default async function deleteActiveFileHandler(req, res) {
  const { id } = req.query;

  async function findSubject({ id }) {
    const user = await getServerUser(req, res);

    const subject = await readActiveFile({
      id,
      ability: await userAbility(user),
    });
    return subject;
  }

  try {
    const activeFile = await findSubject({ id });
    return abilityValidator({
      req,
      res,
      next: async (req, res) => {
        const activeHandler = await deleteActiveFile(id);
        return res.status(200).json(activeHandler);
      },
      action: "delete",
      subject: subject("ActiveFile", activeFile),
      fields: undefined,
      type: "ActiveFile",
    });
  } catch (error) {
    return res
      .status(error?.statusCode ?? 500)
      .json({ message: error?.message });
  }
}
