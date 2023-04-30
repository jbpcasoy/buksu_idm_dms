export default async function deanEndorsementAbility({ can, cannot, user }) {
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
}
