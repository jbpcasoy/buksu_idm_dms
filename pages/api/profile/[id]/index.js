// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { updateUser } from "@/services/profile";

export default async function handler(req, res) {
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
