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
                },
              },
            },
          },
        },
      },
    });
  }

  if (user?.ActiveFaculty?.ActiveChairperson) {
    can("read", "PeerSuggestionItem", {
      PeerSuggestion: {
        is: {
          SubmittedPeerReview: {
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
}
