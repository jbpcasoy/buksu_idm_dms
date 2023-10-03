export default async function chairpersonSuggestionAbility({
  can,
  cannot,
  user,
}) {
  if (user?.ActiveFaculty?.ActiveDean) {
    can("read", "ChairpersonSuggestion", {
      SubmittedChairpersonReview: {
        is: {
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
        },
      },
    });
  }

  if (user?.ActiveFaculty?.ActiveChairperson) {
    can("connectToChairpersonSuggestion", "SubmittedChairpersonReview", {
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
    can("read", "ChairpersonSuggestion", {
      SubmittedChairpersonReview: {
        is: {
          IM: {
            is: {
              owner: {
                departmentId: {
                  equals: user.ActiveFaculty.Faculty.departmentId,
                },
              },
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
    can("read", "ChairpersonSuggestion");
  }
}
