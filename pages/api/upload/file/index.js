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
  if (process.env.STORAGE === "cloud") {
    return cloudUploadFileHandler(req, res);
  } else if (process.env.STORAGE === "local") {
    localUploadFileHandler(req, res);
  } else {
    throw new Error(
      `env variable STORAGE ${process.env.STORAGE} is not supported`
    );
  }
});

async function cloudUploadFileHandler(req, res) {
  const file = req.file;

  const filename = `${uuidv4()}_${slugify(file.originalname, { lower: true })}`;

  await firebaseUploadFile({ path: `uploads/file/${filename}`, file });
  return res.status(200).json({ ...file, filename, buffer: undefined });
}

async function localUploadFileHandler(req, res) {
  const file = req.file;

  res.status(200).json(file);
}

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};
