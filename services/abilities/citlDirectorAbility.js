export default async function citlDirectorAbility({ can, cannot, user }) {
  if (
    user?.IMDCoordinator?.ActiveIMDCoordinator ||
    user?.CITLDirector?.ActiveCITLDirector
  ) {
    can("read", "CITLDirector");
  }
}
