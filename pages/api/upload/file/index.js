import uploadMemoryStorageMiddleware from "@/services/middleware/upload/uploadFile";
import nextConnect from "next-connect";
import getServerUser from "@/services/helpers/getServerUser";
import readFile from "@/services/api/file/readFile";
import userAbility from "@/services/abilities/defineAbility";
import statusError from "@/services/helpers/throwError";
import updateFile from "@/services/api/file/updateFile";
import catchAllError from "@/services/middleware/catchAllError";
import uploadFileToStorage from "@/services/helpers/uploadFileToStorage";
import { reqLog } from "@/services/api/logger";

// TODO implement logging

const apiRoute = nextConnect({
  onError(error, req, res) {
    throw error;
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(uploadMemoryStorageMiddleware);

apiRoute.post(async (req, res) => {
  return catchAllError(req, res, async (req, res) => {
    reqLog(req, res);
    const { fileId } = req.body;
    const file = req.file;

    const user = await getServerUser(req, res);

    const serverFile = await readFile({
      id: fileId,
      ability: await userAbility(user),
    });

    if (serverFile?.fileName) {
      throw statusError({ statusCode: 409, message: "File already uploaded" });
    }

    await uploadFileToStorage({ dest: `uploads/file/${fileId}.pdf`, file });
    await updateFile({
      id: fileId,
      data: { fileName: `${fileId}.pdf` },
      ability: await userAbility(user),
    });

    return res
      .status(201)
      .json({ ...file, filename: `${fileId}.pdf`, buffer: undefined });
  });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};
