import { storage } from "@/firebase";
import { getDownloadURL, ref } from "firebase/storage";

export default async function firebaseDownloadFile({ path }) {
  const fileRef = ref(storage, path);

  const fileURL = await getDownloadURL(fileRef);
  return fileURL;
}
