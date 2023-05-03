export default async function chairpersonReviewItemAbility({
  can,
  cannot,
  user,
}) {
  if (user?.ActiveFaculty?.ActiveChairperson) {
    can("connectToChairpersonReviewItem", "ChairpersonReview", {
      chairpersonId: {
        equals: user.ActiveFaculty.ActiveChairperson.chairpersonId,
      },
      IM: {
        is: {
          SubmittedChairpersonSuggestion: {
            isNot: {
              id: { contains: "" },
            },
          },
        },
      },
    });

    can("read", "ChairpersonReviewItem", {
      ChairpersonReview: {
        is: {
          chairpersonId: {
            equals: user.ActiveFaculty.ActiveChairperson.chairpersonId,
          },
        },
      },
    });

    can("delete", "ChairpersonReviewItem", {
      ChairpersonReview: {
        is: {
          chairpersonId: {
            equals: user.ActiveFaculty.ActiveChairperson.chairpersonId,
          },
          IM: {
            is: {
              SubmittedChairpersonSuggestion: {
                isNot: {
                  id: { contains: "" },
                },
              },
            },
          },
        },
      },
    });

    can("update", "ChairpersonReviewItem", ["answer"], {
      ChairpersonReview: {
        is: {
          chairpersonId: {
            equals: user.ActiveFaculty.ActiveChairperson.chairpersonId,
          },
          IM: {
            is: {
              SubmittedChairpersonSuggestion: {
                isNot: {
                  id: { contains: "" },
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
    can("read", "ChairpersonReviewItem");
  }
}
