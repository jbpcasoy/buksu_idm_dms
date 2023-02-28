import firebaseUploadFile from "@/services/api/upload/file/firebaseUploadFile";
import uploadFile from "@/services/middleware/upload/uploadFile";
import { uuidv4 } from "@firebase/util";
import nextConnect from "next-connect";
import slugify from "slugify";

// TODO implement logging

const apiRoute = nextConnect({
  onError(error, req, res) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(uploadFile);

apiRoute.post(async (req, res) => {
  const file = req.file;

  const filename = `${uuidv4()}_${slugify(file.originalname, { lower: true })}`;

  await firebaseUploadFile({ path: `uploads/file/${filename}`, file });
  res.status(200).json({ ...file, filename, buffer: undefined });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};
