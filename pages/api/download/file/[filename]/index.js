import firebaseDownloadFile from "@/services/api/download/file/firebaseDownloadFile";
import localDownloadFile from "@/services/api/download/file/localDownloadFile";
import { reqLog } from "@/services/api/logger";

export default async function handler(req, res) {
  await reqLog(req, res);

  try {
    if (process.env.STORAGE === "cloud") {
      return cloudDownloadFileHandler(req, res);
    } else if (process.env.STORAGE === "local") {
      return localDownloadFileHandler(req, res);
    } else {
      throw new Error(
        `env variable STORAGE ${process.env.STORAGE} is not supported`
      );
    }
  } catch (error) {
    throw error;
  }
}

async function cloudDownloadFileHandler(req, res) {
  const { filename } = req.query;
  const fileURL = await firebaseDownloadFile({
    path: `uploads/file/${filename}`,
  });
  return res.redirect(fileURL, 301);
}

async function localDownloadFileHandler(req, res) {
  const { filename } = req.query;
  const file = await localDownloadFile({
    path: `uploads/file/${filename}`,
  });

  res.setHeader("Content-Disposition", `inline; filename=${filename}`);
  res.setHeader("Content-Type", `application/pdf`);
  res.statusCode = 200;
  return res.send(file);
}
