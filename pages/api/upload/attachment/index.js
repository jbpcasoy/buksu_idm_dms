import { reqLog } from "@/services/api/logger";
import multer from "multer";
import nextConnect from "next-connect";
import slugify from "slugify";
import { v4 as uuidv4 } from "uuid";

const upload = multer({
  storage: multer.diskStorage({
    destination: "uploads/attachment",
    filename: (req, file, cb) =>
      cb(null, `${uuidv4()}_${slugify(file.originalname, { lower: true })}`),
  }),
});

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

apiRoute.use(upload.single("file"));

apiRoute.post(async (req, res) => {
  const file = req.file;

  await reqLog(req, res);

  res.status(200).json(file);
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};
