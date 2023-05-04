import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function upsertSettings({ vpaa }) {
  const prisma = PRISMA_CLIENT;

  const settings = await prisma.settings.upsert({
    create: {
      vpaa,
      uuid: process.env.UUID,
    },
    update: {
      vpaa,
    },
    where: {
      uuid: process.env.UUID,
    },
  });

  return settings;
}
