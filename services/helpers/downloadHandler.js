import cloudDownloadFile from "./cloudDownloadFile";
import localDownloadFile from "./localDownloadFile";

export default async function downloadHandler({ path, res }) {
  if (process.env.STORAGE === "cloud") {
    const fileURL = await cloudDownloadFile({ path });

    return res.redirect(fileURL, 301);
  } else if (process.env.STORAGE === "local") {
    const file = await localDownloadFile({ path });

    return res.status(200).send(file);
  } else {
    throw new Error(
      `env variable STORAGE ${process.env.STORAGE} is not supported`
    );
  }
}
