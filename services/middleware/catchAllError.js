import handler from "@/pages/api/active_chairperson";

export default async function catchAllError(req, res, next) {
  try {
    const result = await next(req, res);
    return result;
  } catch (error) {
    console.error(error);
    return res
      .status(
        error?.code === "P2025"
          ? 404
          : error?.code === "P2014" || error?.code === "P2002"
          ? 400
          : error?.statusCode ?? 500
      )
      .json({
        message:
          error?.code === "P2014"
            ? `The change you are trying to make would violate the required relation '${error.meta.relation_name}' between the ${error.meta.model_a_name} and ${error.meta.model_b_name} models.`
            : error?.code === "P2002"
            ? `Unique constraint failed on the ${error.meta.target}`
            : error?.message ?? "Something went wrong",
      });
  }
}
