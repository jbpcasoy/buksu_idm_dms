export default async function iMDCoordinatorSuggestionItemAbility({
  can,
  cannot,
  user,
}) {
  if (user?.IMDCoordinator?.ActiveIMDCoordinator) {
    can("connectToIMDCoordinatorSuggestionItem", "IMDCoordinatorSuggestion", {
      iMDCoordinatorId: {
        equals: user.IMDCoordinator.ActiveIMDCoordinator.iMDCoordinatorId,
      },
      OR: [
        {
          SubmittedIMDCoordinatorSuggestion: {
            isNot: {
              id: { contains: "" },
            },
          },
        },
        {
          IM: {
            is: {
              returned: {
                equals: true,
              },
            },
          },
        },
      ],
    });

    can("read", "IMDCoordinatorSuggestionItem", {
      IMDCoordinatorSuggestion: {
        is: {
          iMDCoordinatorId: {
            equals: user.IMDCoordinator.ActiveIMDCoordinator.iMDCoordinatorId,
          },
        },
      },
    });

    can("delete", "IMDCoordinatorSuggestionItem", {
      IMDCoordinatorSuggestion: {
        is: {
          iMDCoordinatorId: {
            equals: user.IMDCoordinator.ActiveIMDCoordinator.iMDCoordinatorId,
          },
          OR: [
            {
              SubmittedIMDCoordinatorSuggestion: {
                isNot: {
                  id: { contains: "" },
                },
              },
            },
            {
              IM: {
                is: {
                  returned: {
                    equals: true,
                  },
                },
              },
            },
          ],
        },
      },
    });

    can(
      "update",
      "IMDCoordinatorSuggestionItem",
      ["value", "pageNumber", "remarks"],
      {
        IMDCoordinatorSuggestion: {
          is: {
            iMDCoordinatorId: {
              equals: user.IMDCoordinator.ActiveIMDCoordinator.iMDCoordinatorId,
            },
            OR: [
              {
                SubmittedIMDCoordinatorSuggestion: {
                  isNot: {
                    id: { contains: "" },
                  },
                },
              },
              {
                IM: {
                  is: {
                    returned: {
                      equals: true,
                    },
                  },
                },
              },
            ],
          },
        },
      }
    );
  }

  if (user?.ActiveFaculty) {
    can("update", "IMDCoordinatorSuggestionItem", ["actionTaken"], {
      IMDCoordinatorSuggestion: {
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
    });
  }

  if (user?.ActiveFaculty) {
    can("read", "IMDCoordinatorSuggestionItem", {
      IMDCoordinatorSuggestion: {
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
}
