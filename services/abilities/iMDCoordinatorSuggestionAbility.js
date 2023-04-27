export default async function iMDCoordinatorSuggestionAbility({
  can,
  cannot,
  user,
}) {
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
}
