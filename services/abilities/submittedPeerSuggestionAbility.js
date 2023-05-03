export default async function submittedPeerSuggestionAbility({
  can,
  cannot,
  user,
}) {
  if (user?.ActiveFaculty) {
    can("connectToSubmittedPeerSuggestion", "PeerSuggestion", {
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
    });

    can("read", "SubmittedPeerSuggestion", {
      PeerSuggestion: {
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
