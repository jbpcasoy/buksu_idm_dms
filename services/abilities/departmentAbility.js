export default async function departmentAbility({ can, cannot, user }) {
  can("read", "Department");
}
