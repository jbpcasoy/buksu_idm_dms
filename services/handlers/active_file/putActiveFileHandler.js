import userAbility from "@/services/abilities/defineAbility";
import readActiveFile from "@/services/api/active_file/readActiveFile";
import updateActiveFile from "@/services/api/active_file/updateActiveFile";
import readFile from "@/services/api/file/readFile";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";
import { permittedFieldsOf } from "@casl/ability/extra";
import _ from "lodash";

export default async function putActiveFileHandler(req, res) {
  const { id } = req.query;
  const { fileId } = req.body;
  const user = await getServerUser(req, res);
  const file = await readFile({ id: fileId, ability: await userAbility(user) });

  async function findSubject({ id }) {
    const user = await getServerUser(req, res);

    const subject = await readActiveFile({
      id,
      ability: await userAbility(user),
    });
    return subject;
  }

  const activeFile = await findSubject({ id });
  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      return abilityValidator({
        req,
        res,
        next: async (req, res) => {
          const fields = permittedFieldsOf(
            await userAbility(user),
            "update",
            activeFile,
            {
              fieldsFrom: (rule) => rule.fields,
            }
          );

          const updatedActiveFile = await updateActiveFile(id, {
            ..._.pick({ fileId }, fields),
          });

          return res.status(200).json(updatedActiveFile);
        },
        action: "connectToActiveFile",
        subject: subject("File", file),
        fields: undefined,
        type: "File",
      });
    },
    action: "update",
    subject: subject("ActiveFile", activeFile),
    fields: undefined,
    type: "ActiveFile",
  });
}
