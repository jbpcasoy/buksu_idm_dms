import firebaseUploadFile from "@/services/api/upload/file/firebaseUploadFile";
import localUploadFile from "@/services/api/upload/file/localUploadFile";
import path from "path";

export default async function uploadFileToStorage({ dest, file }) {
  if (process.env.STORAGE === "cloud") {
    return firebaseUploadFile({ path: dest, file });
  } else if (process.env.STORAGE === "local") {
    return localUploadFile({ path: path.join(process.cwd(), dest), file });
  } else {
    throw new Error(
      `env variable STORAGE ${process.env.STORAGE} is not supported`
    );
  }
}
