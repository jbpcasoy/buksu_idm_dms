export default async function chairpersonSuggestionAbility({
  can,
  cannot,
  user,
}) {
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

    can("read", "ChairpersonSuggestion", {
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
    });
  }

  if (user?.ActiveFaculty) {
    can("read", "ChairpersonSuggestion", {
      SubmittedChairpersonReview: {
        is: {
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
        },
      },
    });
  }
}
