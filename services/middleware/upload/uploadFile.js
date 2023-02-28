import multer from "multer";

export default async function uploadFile(req, res, next) {
  // save to local
  //   const upload = multer({
  //     storage: multer.diskStorage({
  //       destination: "uploads/file",
  //       filename: (req, file, cb) =>
  //         cb(null, `${uuidv4()}_${slugify(file.originalname, { lower: true })}`),
  //     }),
  //   });

  // save file in memory
  const upload = multer({
    storage: multer.memoryStorage(),
  });

  const uploadSingle = upload.single("file");
  return uploadSingle(req, res, next);
}
