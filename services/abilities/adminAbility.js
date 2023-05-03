export default async function adminAbility({ can, cannot, user }) {
  if (user?.Admin && user?.LoginRole?.Role === "ADMIN") {
    can("manage", "all");

    // IM
    // restricts admin IM updating capability to ensure that
    // the status flow was followed
    cannot("update", "IM");
    can("update", "IM", ["title", "authors", "type"]);
    can("update", "IM", ["serialNumber"], {
      status: {
        equals: "CITL_ENDORSED",
      },
    });
    // when IM owners can update status
    can("update", "IM", ["status"], {
      ActiveFile: {
        is: {
          fileId: {
            contains: "",
          },
        },
      },
      status: {
        in: ["SUBMITTED", "DEPARTMENT_REVISED", "CITL_REVISED"],
      },
    });
  }
}
