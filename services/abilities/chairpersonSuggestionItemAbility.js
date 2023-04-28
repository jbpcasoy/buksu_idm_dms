export default async function chairpersonSuggestionItemAbility({
  can,
  cannot,
  user,
}) {
  if (user?.ActiveFaculty?.ActiveChairperson) {
    can("connectToChairpersonSuggestionItem", "ChairpersonSuggestion", {
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

    can("delete", "ChairpersonSuggestionItem", {
      ChairpersonSuggestion: {
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

    can(
      "update",
      "ChairpersonSuggestionItem",
      ["value", "pageNumber", "remarks"],
      {
        ChairpersonSuggestion: {
          is: {
            SubmittedChairpersonReview: {
              is: {
                ChairpersonReview: {
                  is: {
                    chairpersonId: {
                      equals:
                        user.ActiveFaculty.ActiveChairperson.chairpersonId,
                    },
                  },
                },
              },
            },
          },
        },
      }
    );
  }

  if (user?.ActiveFaculty) {
    can("read", "ChairpersonSuggestionItem", {
      ChairpersonSuggestion: {
        is: {
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
        },
      },
    });
  }

  if (user?.ActiveFaculty) {
    can("update", "ChairpersonSuggestionItem", ["actionTaken"], {
      ChairpersonSuggestion: {
        is: {
          SubmittedChairpersonReview: {
            is: {
              IM: {
                is: {
                  ownerId: {
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

  if (
    user?.IMDCoordinator?.ActiveIMDCoordinator ||
    user?.CITLDirector?.ActiveCITLDirector
  ) {
    can("read", "ChairpersonSuggestionItem");
  }
}
