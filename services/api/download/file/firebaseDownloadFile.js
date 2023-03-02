import { storage } from "@/firebase";
import { getDownloadURL, ref } from "firebase/storage";

export default async function firebaseDownloadFile({ path }) {
  try {
    const fileRef = ref(storage, path);

    const fileURL = await getDownloadURL(fileRef);
    return fileURL;
  } catch (error) {
    throw error;
  }
}
