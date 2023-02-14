export default async function methodNaHandler(req, res) {
  return res.status(405).json({ message: "Method Not Allowed" });
}
