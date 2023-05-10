import userAbility from "@/services/abilities/defineAbility";
import createFile from "@/services/api/file/createFile";
import readIM from "@/services/api/im/readIM";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";

export default async function postFileHandler(req, res) {
  const { fileName, originalFileName, iMId, googleDocsUrl } = req.body;
  const user = await getServerUser(req, res);

  const iM = await readIM({ id: iMId, ability: await userAbility(user) });

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const file = await createFile(
        {
          fileName,
          originalFileName,
          iMId,
          googleDocsUrl,
        },
        await userAbility(user)
      );
      return res.status(201).json(file);
    },
    action: "connectToFile",
    subject: subject("IM", iM),
    fields: undefined,
    type: "IM",
  });
}
