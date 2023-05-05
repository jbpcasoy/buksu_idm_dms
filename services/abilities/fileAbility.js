export default async function fileAbility({ can, cannot, user }) {
  if (user?.ActiveFaculty) {
    if (user?.ActiveFaculty) {
      can("connectToFile", "IM", {
        ownerId: {
          equals: user.ActiveFaculty.facultyId,
        },
        status: {
          in: ["DRAFT", "DEPARTMENT_REVIEWED", "CITL_REVIEWED"],
        },
      });
    }
  }
  can("read", "File");
}
