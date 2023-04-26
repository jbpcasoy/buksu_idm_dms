import { AbilityBuilder } from "@casl/ability";
import { createPrismaAbility } from "@casl/prisma";

export default async function userAbility(user) {
  console.log({ user: JSON.stringify(user) });
  const { can, cannot, build } = new AbilityBuilder(createPrismaAbility);

  // Global
  if (user?.Admin && user?.LoginRole?.Role === "ADMIN") {
    can("manage", "all");
  }
  // can("read", "all");
  can("read", "Coordinator");

  // ActiveFaculty
  can("read", "ActiveFaculty");

  // ActiveFile
  if (user?.ActiveFaculty) {
    can("connectToActiveFile", "IM", {
      ownerId: {
        equals: user.ActiveFaculty.facultyId,
      },
    });
    can("connectToActiveFile", "File", {
      iM: {
        is: {
          ownerId: {
            equals: user.ActiveFaculty.facultyId,
          },
        },
      },
    });
    can("delete", "ActiveFile", {
      IM: {
        is: {
          ownerId: {
            equals: user.ActiveFaculty.facultyId,
          },
        },
      },
    });
    can("read", "ActiveFile", {
      IM: {
        is: {
          owner: {
            is: {
              departmentId: {
                equals: user.ActiveFaculty.departmentId,
              },
            },
          },
        },
      },
    });
    can("update", "ActiveFile", ["fileId"], {
      IM: {
        is: {
          ownerId: {
            equals: user?.ActiveFaculty?.facultyId,
          },
        },
      },
    });
  }
  if (user?.ActiveFaculty?.ActiveDean) {
    can("read", "ActiveFile", {
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
    });
  }

  // College
  can("read", "College");

  // Department
  can("read", "Department");

  // ChairpersonReview
  if (user?.ActiveFaculty?.ActiveChairperson) {
    can("connectToChairpersonReview", "IM", {
      owner: {
        is: {
          department: {
            is: {
              ActiveChairperson: {
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

    can("read", "ChairpersonReview", {
      chairpersonId: {
        equals: user.ActiveFaculty.ActiveChairperson.chairpersonId,
      },
    });
  }

  // ChairpersonReviewItem
  if (user?.ActiveFaculty?.ActiveChairperson) {
    can("connectToChairpersonReviewItem", "ChairpersonReview", {
      chairpersonId: {
        equals: user.ActiveFaculty.ActiveChairperson.chairpersonId,
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
        },
      },
    });

    can("update", "ChairpersonReviewItem", ["answer"], {
      ChairpersonReview: {
        is: {
          chairpersonId: {
            equals: user.ActiveFaculty.ActiveChairperson.chairpersonId,
          },
        },
      },
    });
  }

  // SubmittedChairpersonReview
  if (user?.ActiveFaculty?.ActiveChairperson) {
    can("connectToSubmittedChairpersonReview", "ChairpersonReview", {
      chairpersonId: {
        equals: user.ActiveFaculty.ActiveChairperson.chairpersonId,
      },
    });

    can("read", "SubmittedChairpersonReview", {
      ChairpersonReview: {
        is: {
          chairpersonId: {
            equals: user.ActiveFaculty.ActiveChairperson.chairpersonId,
          },
        },
      },
    });
  }

  // ChairpersonSuggestion
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

  // ChairpersonSuggestionItem
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

    can("read", "ChairpersonSuggestionItem", {
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

  // SubmittedChairpersonSuggestion
  if (user?.ActiveFaculty?.ActiveChairperson) {
    can("connectToSubmittedChairpersonSuggestion", "ChairpersonSuggestion", {
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

    can("read", "SubmittedChairpersonSuggestion", {
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
  }

  // CoordinatorReview
  if (user?.ActiveFaculty?.ActiveCoordinator) {
    can("connectToCoordinatorReview", "IM", {
      owner: {
        is: {
          department: {
            is: {
              ActiveCoordinator: {
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

    can("read", "CoordinatorReview", {
      coordinatorId: {
        equals: user.ActiveFaculty.ActiveCoordinator.coordinatorId,
      },
    });
  }

  // CoordinatorReviewItem
  if (user?.ActiveFaculty?.ActiveCoordinator) {
    can("connectToCoordinatorReviewItem", "CoordinatorReview", {
      coordinatorId: {
        equals: user.ActiveFaculty.ActiveCoordinator.coordinatorId,
      },
    });

    can("read", "CoordinatorReviewItem", {
      CoordinatorReview: {
        is: {
          coordinatorId: {
            equals: user.ActiveFaculty.ActiveCoordinator.coordinatorId,
          },
        },
      },
    });

    can("delete", "CoordinatorReviewItem", {
      CoordinatorReview: {
        is: {
          coordinatorId: {
            equals: user.ActiveFaculty.ActiveCoordinator.coordinatorId,
          },
        },
      },
    });

    can("update", "CoordinatorReviewItem", ["answer"], {
      CoordinatorReview: {
        is: {
          coordinatorId: {
            equals: user.ActiveFaculty.ActiveCoordinator.coordinatorId,
          },
        },
      },
    });
  }

  // SubmittedCoordinatorReview
  if (user?.ActiveFaculty?.ActiveCoordinator) {
    can("connectToSubmittedCoordinatorReview", "CoordinatorReview", {
      coordinatorId: {
        equals: user.ActiveFaculty.ActiveCoordinator.coordinatorId,
      },
    });

    can("read", "SubmittedCoordinatorReview", {
      CoordinatorReview: {
        is: {
          coordinatorId: {
            equals: user.ActiveFaculty.ActiveCoordinator.coordinatorId,
          },
        },
      },
    });
  }

  // CoordinatorSuggestion
  if (user?.ActiveFaculty?.ActiveCoordinator) {
    can("connectToCoordinatorSuggestion", "SubmittedCoordinatorReview", {
      CoordinatorReview: {
        is: {
          coordinatorId: {
            equals: user.ActiveFaculty.ActiveCoordinator.coordinatorId,
          },
        },
      },
    });

    can("read", "CoordinatorSuggestion", {
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
  }

  // CoordinatorSuggestionItem
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
  }

  // SubmittedCoordinatorSuggestion
  if (user?.ActiveFaculty?.ActiveCoordinator) {
    can("connectToSubmittedCoordinatorSuggestion", "CoordinatorSuggestion", {
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

    can("read", "SubmittedCoordinatorSuggestion", {
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
  }

  // PeerReview
  if (user?.ActiveFaculty) {
    can("connectToPeerReview", "IM", {
      owner: {
        is: {
          AND: [
            {
              departmentId: {
                equals: user.ActiveFaculty.departmentId,
              },
            },
            {
              id: {
                not: user.ActiveFaculty.facultyId,
              },
            },
          ],
        },
      },
    });

    can("read", "PeerReview", {
      facultyId: {
        equals: user.ActiveFaculty.facultyId,
      },
    });
  }

  // PeerReviewItem
  if (user?.ActiveFaculty) {
    can("connectToPeerReviewItem", "PeerReview", {
      facultyId: {
        equals: user.ActiveFaculty.facultyId,
      },
    });

    can("read", "PeerReviewItem", {
      PeerReview: {
        is: {
          facultyId: {
            equals: user.ActiveFaculty.facultyId,
          },
        },
      },
    });

    can("delete", "PeerReviewItem", {
      PeerReview: {
        is: {
          facultyId: {
            equals: user.ActiveFaculty.facultyId,
          },
        },
      },
    });

    can("update", "PeerReviewItem", ["answer"], {
      PeerReview: {
        is: {
          facultyId: {
            equals: user.ActiveFaculty.facultyId,
          },
        },
      },
    });
  }

  // SubmittedPeerReview
  if (user?.ActiveFaculty) {
    can("connectToSubmittedPeerReview", "PeerReview", {
      facultyId: {
        equals: user.ActiveFaculty.facultyId,
      },
    });

    can("read", "SubmittedPeerReview", {
      PeerReview: {
        is: {
          facultyId: {
            equals: user.ActiveFaculty.facultyId,
          },
        },
      },
    });
  }

  // PeerSuggestion
  if (user?.ActiveFaculty) {
    can("connectToPeerSuggestion", "SubmittedPeerReview", {
      PeerReview: {
        is: {
          facultyId: {
            equals: user.ActiveFaculty.facultyId,
          },
        },
      },
    });

    can("read", "PeerSuggestion", {
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
  }
  // PeerSuggestionItem
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

  // SubmittedPeerSuggestion
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

  // CoordinatorEndorsement
  if (user?.ActiveFaculty?.ActiveCoordinator) {
    can("connectToCoordinatorEndorsement", "IM", {
      owner: {
        is: {
          department: {
            is: {
              ActiveCoordinator: {
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

    can("read", "CoordinatorEndorsement", {
      coordinatorId: {
        equals: user.ActiveFaculty.ActiveCoordinator.coordinatorId,
      },
    });
  }

  // Dean
  if (user?.ActiveFaculty?.ActiveDean) {
    can("read", "Dean");
  }

  // DeanEndorsement
  if (user?.ActiveFaculty?.ActiveDean) {
    can("connectToDeanEndorsement", "CoordinatorEndorsement", {
      Coordinator: {
        is: {
          Faculty: {
            is: {
              department: {
                is: {
                  college: {
                    is: {
                      ActiveDean: {
                        is: {
                          deanId: {
                            equals: user.ActiveFaculty.ActiveDean.deanId,
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

    can("read", "DeanEndorsement", {
      deanId: {
        equals: user.ActiveFaculty.ActiveDean.deanId,
      },
    });
  }

  // IMDCoordinatorSuggestion
  if (user?.IMDCoordinator?.ActiveIMDCoordinator) {
    can("connectToIMDCoordinatorSuggestion", "IM");

    can("read", "IMDCoordinatorSuggestion", {
      iMDCoordinatorId: {
        equals: user.IMDCoordinator.ActiveIMDCoordinator.iMDCoordinatorId,
      },
    });
  }

  // IMDCoordinatorSuggestionItem
  if (user?.IMDCoordinator?.ActiveIMDCoordinator) {
    can("connectToIMDCoordinatorSuggestionItem", "IMDCoordinatorSuggestion", {
      iMDCoordinatorId: {
        equals: user.IMDCoordinator.ActiveIMDCoordinator.iMDCoordinatorId,
      },
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

  // SubmittedIMDCoordinatorSuggestion
  if (user?.IMDCoordinator?.ActiveIMDCoordinator) {
    can(
      "connectToSubmittedIMDCoordinatorSuggestion",
      "IMDCoordinatorSuggestion",
      {
        iMDCoordinatorId: {
          equals: user.IMDCoordinator.ActiveIMDCoordinator.iMDCoordinatorId,
        },
      }
    );

    can("read", "SubmittedIMDCoordinatorSuggestion", {
      IMDCoordinatorSuggestion: {
        is: {
          iMDCoordinatorId: {
            equals: user.IMDCoordinator.ActiveIMDCoordinator.iMDCoordinatorId,
          },
        },
      },
    });
  }

  // IMDCoordinatorEndorsement
  if (user?.IMDCoordinator?.ActiveIMDCoordinator) {
    can(
      "connectToIMDCoordinatorEndorsement",
      "SubmittedIMDCoordinatorSuggestion",
      {
        IMDCoordinatorSuggestion: {
          is: {
            iMDCoordinatorId: {
              // NOTE to ensure that the current user was an  active IMDCoordinator
              // and the owner of the IMDCoordinatorEndorsement
              equals: user.IMDCoordinator.ActiveIMDCoordinator.iMDCoordinatorId,
            },
          },
        },
      }
    );

    can("read", "IMDCoordinatorEndorsement", {
      iMDCoordinatorId: {
        equals: user.IMDCoordinator.ActiveIMDCoordinator.iMDCoordinatorId,
      },
    });
  }

  // User
  can("read", "User");
  can("update", "User", {
    id: {
      equals: user.id,
    },
  });

  // File
  if (user?.ActiveFaculty) {
    can("connectToFile", "IM", {
      ownerId: {
        equals: user.ActiveFaculty.facultyId,
      },
    });
  }
  can("read", "File");

  // Notification
  can("read", "Notification");

  // IMEvent
  can("read", "IMEvent");

  // ReadNotification
  can("connectToReadNotification", "Notification");

  return build();
}
