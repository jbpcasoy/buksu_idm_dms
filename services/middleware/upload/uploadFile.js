import multer from "multer";
import slugify from "slugify";
import { v4 as uuidv4 } from "uuid";

export default async function uploadFile(req, res, next) {
  if (process.env.STORAGE === "cloud") {
    return cloudUploadFileMiddleware(req, res, next);
  } else if (process.env.STORAGE === "local") {
    return localUploadFileMiddleware(req, res, next);
  } else {
    throw new Error(
      `env variable STORAGE ${process.env.STORAGE} is not supported`
    );
  }
}

async function cloudUploadFileMiddleware(req, res, next) {
  // save file in memory
  const upload = multer({
    storage: multer.memoryStorage(),
  });

  const uploadSingle = upload.single("file");
  return uploadSingle(req, res, next);
}

async function localUploadFileMiddleware(req, res, next) {
  // save to local
  const upload = multer({
    storage: multer.diskStorage({
      destination: "uploads/file",
      filename: (req, file, cb) =>
        cb(null, `${uuidv4()}_${slugify(file.originalname, { lower: true })}`),
    }),
  });

  const uploadSingle = upload.single("file");
  return uploadSingle(req, res, next);
}
