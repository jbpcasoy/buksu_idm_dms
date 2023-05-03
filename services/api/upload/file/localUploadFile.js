import statusError from "@/services/helpers/throwError";
import logger from "../../logger";
import fs from "fs";

export default async function localUploadFile({ path, file }) {
  return fs.writeFile(path, file.buffer, function (err) {
    if (err) {
      logger.error(err);
      throw statusError({ statusCode: 500, message: "Error saving file" });
    }
  });
}
