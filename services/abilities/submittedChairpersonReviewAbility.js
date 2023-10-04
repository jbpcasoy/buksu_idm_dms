export default async function submittedChairpersonReviewAbility({
  can,
  cannot,
  user,
}) {
  if (user?.ActiveFaculty?.ActiveDean) {
    can("read", "SubmittedChairpersonReview", {
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

  if (user?.ActiveFaculty?.ActiveChairperson) {
    can("connectToSubmittedChairpersonReview", "ChairpersonReview", {
      chairpersonId: {
        equals: user.ActiveFaculty.ActiveChairperson.chairpersonId,
      },
    });

    can("read", "SubmittedChairpersonReview", {
      ChairpersonReview: {
        is: {
          chairpersonId: {
            equals: user.ActiveFaculty.ActiveChairperson.chairpersonId,
          },
        },
      },
    });
  }

  if (user?.ActiveFaculty) {
    can("read", "SubmittedChairpersonReview", {
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
    can("read", "SubmittedChairpersonReview");
  }
}
