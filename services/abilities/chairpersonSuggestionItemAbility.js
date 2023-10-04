export default async function chairpersonSuggestionItemAbility({
  can,
  cannot,
  user,
}) {
  if (user?.ActiveFaculty?.ActiveDean) {
    can("read", "ChairpersonSuggestionItem", {
      ChairpersonSuggestion: {
        is: {
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
        },
      },
    });
  }

  if (user?.ActiveFaculty?.ActiveChairperson) {
    can("connectToChairpersonSuggestionItem", "ChairpersonSuggestion", {
      SubmittedChairpersonReview: {
        is: {
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
