import statusError from "@/services/helpers/throwError";
import fs from "fs";
import logger from "../../logger";

export default async function localUploadFile({ path, file }) {
  return fs.writeFile(path, file.buffer, function (err) {
    if (err) {
      logger.error(err);
      throw statusError({ statusCode: 500, message: "Error saving file" });
    }
  });
}
