export default async function announcementAbility({ can, cannot, user }) {
  can("read", "Announcement");
}
