import firebaseUploadFile from "@/services/api/upload/file/firebaseUploadFile";
import path from "path";
import localUploadFile from "@/services/api/upload/file/localUploadFile";

export default async function uploadFileToStorage({ dest, file }) {
  if (process.env.STORAGE === "cloud") {
    await firebaseUploadFile({ path: dest, file });
  } else if (process.env.STORAGE === "local") {
    await localUploadFile({ path: path.join(process.cwd(), dest), file });
  } else {
    throw new Error(
      `env variable STORAGE ${process.env.STORAGE} is not supported`
    );
  }
}
