export default async function departmentAbility({ can, cannot, user }) {
  if (
    user?.IMDCoordinator?.ActiveIMDCoordinator ||
    user?.CITLDirector?.ActiveCITLDirector
  ) {
    can("read", "Department");
  }

  if (user?.ActiveFaculty?.ActiveDean) {
    can("read", "Department", {
      collegeId: {
        contains: user?.ActiveFaculty?.ActiveDean?.collegeId,
      },
    });
  }

  if (user?.ActiveFaculty) {
    can("read", "Department", {
      id: {
        contains: user?.ActiveFaculty?.Faculty?.departmentId,
      },
    });
  }
}
