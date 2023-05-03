export default async function peerReviewAbility({ can, cannot, user }) {
  if (user?.ActiveFaculty) {
    can("connectToPeerReview", "IM", {
      owner: {
        is: {
          AND: [
            {
              departmentId: {
                equals: user.ActiveFaculty.departmentId,
              },
            },
            {
              id: {
                not: user.ActiveFaculty.facultyId,
              },
            },
          ],
        },
      },
      status: {
        equals: "SUBMITTED",
      },
    });

    can("read", "PeerReview", {
      facultyId: {
        equals: user.ActiveFaculty.facultyId,
      },
    });
  }

  if (
    user?.IMDCoordinator?.ActiveIMDCoordinator ||
    user?.CITLDirector?.ActiveCITLDirector
  ) {
    can("read", "PeerReview");
  }
}
