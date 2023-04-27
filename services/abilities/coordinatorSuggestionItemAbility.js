export default async function coordinatorSuggestionItemAbility({
  can,
  cannot,
  user,
}) {
  if (user?.ActiveFaculty?.ActiveCoordinator) {
    can("connectToCoordinatorSuggestionItem", "CoordinatorSuggestion", {
      SubmittedCoordinatorReview: {
        is: {
          CoordinatorReview: {
            is: {
              coordinatorId: {
                equals: user.ActiveFaculty.ActiveCoordinator.coordinatorId,
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
              CoordinatorReview: {
                is: {
                  coordinatorId: {
                    equals: user.ActiveFaculty.ActiveCoordinator.coordinatorId,
                  },
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
    can("read", "CoordinatorSuggestionItem", {
      CoordinatorSuggestion: {
        is: {
          SubmittedCoordinatorReview: {
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
        },
      },
    });
  }

  if (user?.ActiveFaculty?.ActiveChairperson) {
    can("read", "CoordinatorSuggestionItem", {
      CoordinatorSuggestion: {
        is: {
          SubmittedCoordinatorReview: {
            is: {
              IM: {
                is: {
                  SubmittedChairpersonReview: {
                    is: {
                      ChairpersonReview: {
                        is: {
                          chairpersonId: {
                            equals:
                              user.ActiveFaculty.ActiveChairperson
                                .chairpersonId,
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
}
