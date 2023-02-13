// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const { id } = req.query;

  switch (req.method) {
    //   case 'GET':
    //     res.status(200).json({ message: 'Hello from the GET method' });
    //     break;
    case "POST":
      const { fileName, originalFileName, iMId, googleDocsUrl } = req.body;
      const file = await createFile({
        fileName,
        originalFileName,
        iMId,
        googleDocsUrl,
      });
      res.status(200).json(file);
      break;
    default:
      res.status(405).json({ message: "Method Not Allowed" });
      break;
  }
}
