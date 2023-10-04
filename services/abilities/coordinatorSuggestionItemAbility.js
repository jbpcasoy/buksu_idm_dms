export default async function coordinatorSuggestionItemAbility({
  can,
  cannot,
  user,
}) {
  if (user?.ActiveFaculty?.ActiveDean) {
    can("read", "CoordinatorSuggestionItem", {
      CoordinatorSuggestion: {
        is: {
          SubmittedCoordinatorReview: {
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
        },
      },
    });
  }

  if (user?.ActiveFaculty?.ActiveCoordinator) {
    can("connectToCoordinatorSuggestionItem", "CoordinatorSuggestion", {
      SubmittedCoordinatorReview: {
        is: {
          CoordinatorReview: {
            is: {
              coordinatorId: {
                equals: user.ActiveFaculty.ActiveCoordinator.coordinatorId,
              },
              IM: {
                is: {
                  OR: [
                    {
                      SubmittedCoordinatorSuggestion: {
                        isNot: {
                          id: { contains: "" },
                        },
                      },
                    },
                    {
                      returned: {
                        equals: true,
                      },
                    },
                  ],
                },
              },
            },
          },
        },
      },
    });

    can("delete", "CoordinatorSuggestionItem", {
      CoordinatorSuggestion: {
        is: {
          SubmittedCoordinatorReview: {
            is: {
              CoordinatorReview: {
                is: {
                  coordinatorId: {
                    equals: user.ActiveFaculty.ActiveCoordinator.coordinatorId,
                  },
                  IM: {
                    is: {
                      OR: [
                        {
                          SubmittedCoordinatorSuggestion: {
                            isNot: {
                              id: { contains: "" },
                            },
                          },
                        },
                        {
                          returned: {
                            equals: true,
                          },
                        },
                      ],
                    },
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
      "CoordinatorSuggestionItem",
      ["value", "pageNumber", "remarks"],
      {
        CoordinatorSuggestion: {
          is: {
            SubmittedCoordinatorReview: {
              is: {
                CoordinatorReview: {
                  is: {
                    coordinatorId: {
                      equals:
                        user.ActiveFaculty.ActiveCoordinator.coordinatorId,
                    },
                    IM: {
                      is: {
                        OR: [
                          {
                            SubmittedCoordinatorSuggestion: {
                              isNot: {
                                id: { contains: "" },
                              },
                            },
                          },
                          {
                            returned: {
                              equals: true,
                            },
                          },
                        ],
                      },
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
    can("update", "CoordinatorSuggestionItem", ["actionTaken"], {
      CoordinatorSuggestion: {
        is: {
          SubmittedCoordinatorReview: {
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

    can("read", "CoordinatorSuggestionItem", {
      CoordinatorSuggestion: {
        is: {
          SubmittedCoordinatorReview: {
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

  if (
    user?.IMDCoordinator?.ActiveIMDCoordinator ||
    user?.CITLDirector?.ActiveCITLDirector
  ) {
    can("read", "CoordinatorSuggestionItem");
  }
}
