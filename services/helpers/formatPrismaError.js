export default function formatPrismaError(error) {
  if (error.code === "P2002") {
    const statusCode = 409; // Conflict

    return {
      statusCode,
      message: error.message,
    };
  } else if (error.code === "P2014") {
    const relation_name = error.meta.relation_name;
    const model_a_name = error.meta.model_a_name;
    const model_b_name = error.meta.model_b_name;
    const statusCode = 409; // Conflict

    return {
      statusCode,
      message: `The change you are trying to make would violate the required relation '${relation_name}' between the ${model_a_name} and ${model_b_name} models.`,
    };
  } else if (error.code === "P2025") {
    const cause = error?.meta?.cause;
    const statusCode = 404;

    return {
      statusCode,
      message: cause ?? error.message,
    };
  } else {
    const statusCode = 500; // Internal Server Error
    const message = "An error occurred while processing your request.";

    return {
      statusCode,
      message,
    };
  }
}
