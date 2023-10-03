export default async function iMDCoordinatorSuggestionAbility({
  can,
  cannot,
  user,
}) {
  if (user?.ActiveFaculty?.ActiveDean) {
    can("read", "IMDCoordinatorSuggestion");
  }

  if (user?.IMDCoordinator?.ActiveIMDCoordinator) {
    can("connectToIMDCoordinatorSuggestion", "IM", {
      status: {
        equals: "DEPARTMENT_ENDORSED",
      },
    });

    can("read", "IMDCoordinatorSuggestion", {
      iMDCoordinatorId: {
        equals: user.IMDCoordinator.ActiveIMDCoordinator.iMDCoordinatorId,
      },
    });
  }

  if (user?.ActiveFaculty) {
    can("read", "IMDCoordinatorSuggestion", {
      IM: {
        is: {
          owner: {
            departmentId: {
              equals: user.ActiveFaculty.Faculty.departmentId,
            },
          },
        },
      },
    });
  }
}
