import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readSettings({ ability }) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).Settings;

  const settings = await prisma.settings.findFirstOrThrow({
    where: {
      AND: [accessibility],
      uuid: process.env.UUID,
    },
  });

  return settings;
}
