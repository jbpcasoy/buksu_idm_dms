import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import abilityValidator from "@/services/validator/abilityValidator";
import { TroubleshootOutlined } from "@mui/icons-material";
const { createObjectCsvStringifier } = require("csv-writer");
const archiver = require("archiver");

export default async function getExportCITLDirectorHandler(req, res) {
  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      // Create a new Prisma client instance
      const prisma = PRISMA_CLIENT;

      // Create a writable stream for the zip file
      res.setHeader("Content-Type", "application/zip");
      const output = res;
      const archive = archiver("zip", { zlib: { level: 9 } });

      // Pipe the archive stream to the zip file
      archive.pipe(output);

      // Iterate over each model and export its data
      // Retrieve the data for the current model
      const results = await prisma.cITLDirector.findMany({
        include: {
          ActiveCITLDirector: true,
          User: true,
        },
      });

      if (results && results.length > 0) {
        const data = results.map((result) => ({
          name: result.User.name,
          email: result.User.email,
          active: Boolean(result.ActiveCITLDirector) ? "yes" : "no",
          createdAt: result.createdAt,
          updatedAt: result.updatedAt,
        }));
        // Create a CSV writer for the current model
        const csvStringifier = createObjectCsvStringifier({
          header: Object.keys(data[0]).map((field) => ({
            id: field,
            title: field,
          })),
        });

        // Generate the CSV content
        const csvContent =
          csvStringifier.getHeaderString() +
          csvStringifier.stringifyRecords(data);

        // Append the CSV content to the zip archive
        archive.append(csvContent, { name: `cITLDirector.csv` });
      }

      // Finalize the archive
      archive.finalize();
    },
    action: "export",
    subject: "CITLDirector",
    fields: undefined,
    type: "CITLDirector",
  });
}
