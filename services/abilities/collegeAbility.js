export default async function collegeAbility({ can, cannot, user }) {
  if (
    user?.IMDCoordinator?.ActiveIMDCoordinator ||
    user?.CITLDirector?.ActiveCITLDirector
  ) {
    can("read", "College");
  }
  if (user?.ActiveFaculty) {
    can("read", "College", {
      id: {
        contains: user?.ActiveFaculty?.Faculty?.department?.collegeId,
      },
    });
  }
}
