import firebaseDownloadFile from "../api/download/file/firebaseDownloadFile";

export default async function cloudDownloadFile({ path }) {
  const fileURL = await firebaseDownloadFile({
    path,
  });
  return fileURL;
}
