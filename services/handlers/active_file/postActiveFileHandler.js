import createActiveFile from "@/services/api/active_file/createActiveFile";
import readFile from "@/services/api/file/readFile";
import readIM from "@/services/api/im/readIM";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";

export default async function postActiveFileHandler(req, res) {
  const { fileId, iMId } = req.body;
  const iM = await readIM(iMId);
  const file = await readFile(fileId);

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      return abilityValidator({
        req,
        res,
        next: async (req, res) => {
          const activeFile = await createActiveFile({ fileId, iMId });
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
