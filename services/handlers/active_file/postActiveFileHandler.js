import userAbility from "@/services/abilities/defineAbility";
import createActiveFile from "@/services/api/active_file/createActiveFile";
import readFile from "@/services/api/file/readFile";
import readIM from "@/services/api/im/readIM";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";

export default async function postActiveFileHandler(req, res) {
  const { fileId, iMId } = req.body;
  const user = await getServerUser(req, res);
  const iM = await readIM({ id: iMId, ability: await userAbility(user) });
  const file = await readFile({ id: fileId, ability: await userAbility(user) });

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      return abilityValidator({
        req,
        res,
        next: async (req, res) => {
          const activeFile = await createActiveFile({
            fileId,
            iMId,
            ability: await userAbility(user),
          });
          return res.status(201).json(activeFile);
        },
        action: "connectToActiveFile",
        subject: subject("File", file),
        fields: undefined,
        type: "File",
      });
    },
    action: "connectToActiveFile",
    subject: subject("IM", iM),
    fields: undefined,
    type: "IM",
  });
}
