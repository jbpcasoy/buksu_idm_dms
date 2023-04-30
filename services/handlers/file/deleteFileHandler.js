import userAbility from "@/services/abilities/defineAbility";
import deleteFile from "@/services/api/file/deleteFile";
import readFile from "@/services/api/file/readFile";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function deleteFileHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  async function findSubject({ id }) {
    const subject = await readFile({
      id,
      ability: await userAbility(user),
    });
    return subject;
  }

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const deletedFile = await deleteFile(id);

      return res.status(200).json(deletedFile);
    },
    action: "delete",
    subject: await findSubject({ id }),
    fields: undefined,
    type: "ChairpersonReview",
  });
}
