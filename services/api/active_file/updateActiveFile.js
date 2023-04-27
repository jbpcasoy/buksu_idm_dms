import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import readFile from "../file/readFile";
import userAbility from "@/services/abilities/defineAbility";

export default async function updateActiveFile(id, { fileId }) {
  const prisma = PRISMA_CLIENT;
  const user = await getServerUser(req, res);
  const file = await readFile({ id: fileId, ability: await userAbility(user) });

  const activeFile = await prisma.activeFile.update({
    where: {
      id,
    },
    data: {
      File: {
        connect: {
          id: file.id,
        },
      },
    },
  });
  return activeFile;
}
