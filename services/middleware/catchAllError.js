import handler from "@/pages/api/active_chairperson";

export default async function catchAllError(req, res, next) {
  try {
    const result = await next(req, res);
    return result;
  } catch (error) {
    console.error(error);
    return res
      .status(error?.code === "P2025" ? 404 : error?.statusCode ?? 500)
      .json({ message: error?.message ?? "Something went wrong" });
  }
}
