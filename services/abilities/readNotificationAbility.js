export default async function readNotificationAbility({ can, cannot, user }) {
  can("connectToReadNotification", "Notification");
  if (user) {
    can("read", "ReadNotification", {
      userId: {
        equals: user.id,
      },
    });
  }
}
