export default async function peerSuggestionItemAbility({ can, cannot, user }) {
  if (user?.ActiveFaculty) {
    can("connectToPeerSuggestionItem", "PeerSuggestion", {
      SubmittedPeerReview: {
        is: {
          PeerReview: {
            is: {
              facultyId: {
                equals: user.ActiveFaculty.facultyId,
              },
              IM: {
                is: {
                  SubmittedPeerSuggestion: {
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

    can("delete", "PeerSuggestionItem", {
      PeerSuggestion: {
        is: {
          SubmittedPeerReview: {
            is: {
              PeerReview: {
                is: {
                  facultyId: {
                    equals: user.ActiveFaculty.facultyId,
                  },
                  IM: {
                    is: {
                      SubmittedPeerSuggestion: {
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

    can("update", "PeerSuggestionItem", ["value", "pageNumber", "remarks"], {
      PeerSuggestion: {
        is: {
          SubmittedPeerReview: {
            is: {
              PeerReview: {
                is: {
                  facultyId: {
                    equals: user.ActiveFaculty.facultyId,
                  },
                  IM: {
                    is: {
                      SubmittedPeerSuggestion: {
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

    can("read", "PeerSuggestionItem", {
      PeerSuggestion: {
        is: {
          SubmittedPeerReview: {
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
    can("update", "PeerSuggestionItem", ["actionTaken"], {
      PeerSuggestion: {
        is: {
          SubmittedPeerReview: {
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
    can("read", "PeerSuggestionItem");
  }
}
