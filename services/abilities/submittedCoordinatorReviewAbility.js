export default async function submittedCoordinatorReviewAbility({
  can,
  cannot,
  user,
}) {
  if (user?.ActiveFaculty?.ActiveCoordinator) {
    can("connectToSubmittedCoordinatorReview", "CoordinatorReview", {
      coordinatorId: {
        equals: user.ActiveFaculty.ActiveCoordinator.coordinatorId,
      },
    });

    can("read", "SubmittedCoordinatorReview", {
      CoordinatorReview: {
        is: {
          coordinatorId: {
            equals: user.ActiveFaculty.ActiveCoordinator.coordinatorId,
          },
        },
      },
    });
  }

  if (user?.ActiveFaculty?.ActiveChairperson) {
    can("read", "SubmittedCoordinatorReview", {
      IM: {
        is: {
          SubmittedChairpersonReview: {
            is: {
              ChairpersonReview: {
                is: {
                  chairpersonId: {
                    equals: user.ActiveFaculty.ActiveChairperson.chairpersonId,
                  },
                },
              },
            },
          },
        },
      },
    });
  }

  if (user?.ActiveFaculty) {
    can("read", "SubmittedCoordinatorReview", {
      IM: {
        is: {
          SubmittedPeerReview: {
            is: {
              PeerReview: {
                is: {
                  facultyId: {
                    equals: user.ActiveFaculty.facultyId,
                  },
                },
              },
            },
          },
        },
      },
    });
  }
}
