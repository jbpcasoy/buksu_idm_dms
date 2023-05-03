import multer from "multer";

export default async function uploadMemoryStorageMiddleware(req, res, next) {
  const upload = multer({
    storage: multer.memoryStorage(),
  });

  const uploadSingle = upload.single("file");
  return uploadSingle(req, res, next);
}
