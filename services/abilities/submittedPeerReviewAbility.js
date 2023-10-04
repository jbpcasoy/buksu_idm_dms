export default async function submittedPeerReviewAbility({
  can,
  cannot,
  user,
}) {
  if (user?.ActiveFaculty) {
    can("connectToSubmittedPeerReview", "PeerReview", {
      facultyId: {
        equals: user.ActiveFaculty.facultyId,
      },
    });

    if (user?.ActiveFaculty?.ActiveDean) {
      can("read", "SubmittedPeerReview", {
        IM: {
          is: {
            owner: {
              is: {
                department: {
                  is: {
                    collegeId: {
                      equals: user.ActiveFaculty.ActiveDean.collegeId,
                    },
                  },
                },
              },
            },
          },
        },
      });
    }

    can("read", "SubmittedPeerReview", {
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

  if (
    user?.IMDCoordinator?.ActiveIMDCoordinator ||
    user?.CITLDirector?.ActiveCITLDirector
  ) {
    can("read", "SubmittedPeerReview");
  }
}
