// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { reqLog } from "@/services/api/logger";
import { updateUser } from "@/services/api/profile";

export default async function handler(req, res) {
  reqLog(req, res);
  const { id } = req.query;
  const data = req.body;

  switch (req.method) {
    //   case 'GET':
    //     res.status(200).json({ message: 'Hello from the GET method' });
    //     break;
    //   case 'POST':
    //     res.status(200).json({ message: 'Hello from the POST method' });
    //     break;
    case "PATCH":
      const user = await updateUser(id, data);
      //   res.status(200).json({ message: "Hello from the POST method" });
      res.status(200).json(user);
      break;
    default:
      res.status(405).json({ message: "Method Not Allowed" });
      break;
  }
}
