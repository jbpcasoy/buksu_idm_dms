import firebaseDownloadFile from "@/services/api/download/file/firebaseDownloadFile";
import { reqLog } from "@/services/api/logger";

export default async function handler(req, res) {
  await reqLog(req, res);
  const { filename } = req.query;

  try {
    // read from local
    // const readFile = promisify(fs.readFile);
    // const file = await readFile(`${process.cwd()}/uploads/file/${filename}`);

    const fileURL = await firebaseDownloadFile({
      path: `uploads/file/${filename}`,
    });
    // console.log({ file: typeof file });

    // res.setHeader("Content-Disposition", `inline; filename=${filename}`);
    // res.setHeader("Content-Type", `application/pdf`);
    // res.statusCode = 200;
    // res.send(file);
    res.redirect(fileURL, 301);
  } catch (error) {
    throw error;
  }
}
