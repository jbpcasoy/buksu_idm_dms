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
    res.status(405).json({ message: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(uploadMemoryStorageMiddleware);

apiRoute.post(async (req, res) => {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);
    const file = req.file;
    console.log({ file });

    const user = await getServerUser(req, res);

    await uploadFileToStorage({
      dest: `uploads/profile_picture/${user.id}`,
      file,
    });

    return res
      .status(201)
      .json({ ...file, filename: file.filename, buffer: undefined });
  });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};
