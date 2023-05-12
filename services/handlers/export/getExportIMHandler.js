import { PRISMA_CLIENT } from "@/prisma/prisma_client";
const { createObjectCsvStringifier } = require("csv-writer");
const archiver = require("archiver");

export default async function getExportIMHandler(req, res) {
  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      // Create a new Prisma client instance
      const prisma = PRISMA_CLIENT;

      // Create a writable stream for the zip file
      const output = res;
      const archive = archiver("zip", { zlib: { level: 9 } });

      // Pipe the archive stream to the zip file
      archive.pipe(output);

      // Iterate over each model and export its data
      // Retrieve the data for the current model
      const results = await prisma.iM.findMany({
        include: {
          owner: {
            include: {
              user: true,
              department: {
                include: {
                  college: true,
                },
              },
            },
          },
        },
      });

      const data = results.map((result) => ({
        serialNumber: result.serialNumber,
        title: result.title,
        type: result.type,
        owner: result.owner.user.name,
        authors: result.authors,
        department: result.owner.department.name,
        college: result.owner.department.college.name,
        status: result.status,
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
        archive.append(csvContent, { name: `iM.csv` });
      }

      // Finalize the archive
      archive.finalize();
    },
    action: "export",
    subject: "all",
    fields: undefined,
    type: "all",
  });
}
