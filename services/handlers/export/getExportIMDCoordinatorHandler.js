import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import abilityValidator from "@/services/validator/abilityValidator";
import { TroubleshootOutlined } from "@mui/icons-material";
const { createObjectCsvStringifier } = require("csv-writer");
const archiver = require("archiver");

export default async function getExportIMDCoordinatorHandler(req, res) {
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
      const results = await prisma.iMDCoordinator.findMany({
        include: {
          ActiveIMDCoordinator: true,
          User: true,
        },
      });

      const data = results.map((result) => ({
        name: result.User.name,
        email: result.User.email,
        active: Boolean(result.ActiveIMDCoordinator) ? "yes" : "no",
        createdAt: result.createdAt,
        updatedAt: result.updatedAt,
      }));

      if (data && data.length > 0) {
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
        archive.append(csvContent, { name: `iMDCoordinator.csv` });
      }

      // Finalize the archive
      archive.finalize();
    },
    action: "export",
    subject: "IMDCoordinator",
    fields: undefined,
    type: "IMDCoordinator",
  });
}
