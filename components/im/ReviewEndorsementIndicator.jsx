export default function ReviewEndorsementIndicator({ im, direction = "row" }) {
  const peerReviewed = Boolean(im?.SubmittedPeerReview);
  const chairpersonReviewed = Boolean(im?.SubmittedChairpersonReview);
  const coordinatorReviewed = Boolean(im?.SubmittedCoordinatorReview);
  const peerSuggested = Boolean(im?.SubmittedPeerSuggestion);
  const chairpersonSuggested = Boolean(im?.SubmittedChairpersonSuggestion);
  const coordinatorSuggested = Boolean(im?.SubmittedCoordinatorSuggestion);
  const coordinatorEndorsed = Boolean(im?.CoordinatorEndorsement);
  const deanEndorsed = Boolean(im?.CoordinatorEndorsement?.DeanEndorsement);
  const imdCoordinatorSuggested = Boolean(
    im?.IMDCoordinatorEndorsement?.SubmittedIMDCoordinatorEndorsement
  );
  const imdCoordinatorEndorsed = Boolean(im?.IMDCoordinatorEndorsement);
  const peerReviewer = im?.SubmittedPeerReview?.PeerReview?.Faculty?.user;
  const chairpersonReviewer =
    im?.SubmittedChairpersonReview?.ChairpersonReview?.Chairperson?.Faculty
      ?.user;
  const coordinatorReviewer =
    im?.SubmittedCoordinatorReview?.CoordinatorReview?.Coordinator?.Faculty
      ?.user;
  const coordinatorEndorser =
    im?.CoordinatorEndorsement?.Coordinator?.Faculty?.user;
  const deanEndorser =
    im?.CoordinatorEndorsement?.DeanEndorsement?.Dean?.Faculty?.user;
  const imdCoordinatorEndorser =
    im?.IMDCoordinatorEndorsement?.IMDCoordinator?.User;

  return (
    <div
      className={`grid grid-flow-${direction} space-${
        direction === "col" ? "x" : "y"
      }-1 w-36 p-1`}
    >
      {(im.status === "DRAFT" || im.status === "SUBMITTED") && (
        <>
          {peerReviewed && (
            <span
              className='inline-flex items-center bg-purple-400 text-purple-800 text-xs px-3 py-1 rounded-full'
              title={
                peerSuggested
                  ? "Reviewed with Suggestions"
                  : "Reviewed, No Suggestions"
              }
            >
              Peer
              {peerSuggested && (
                <img
                  src={peerReviewer.image}
                  alt='Peer'
                  title={peerReviewer.name}
                  className='w-3 h-3   rounded-full mx-1'
                />
              )}
              {!peerSuggested && (
                <img
                  src={peerReviewer.image}
                  alt='Peer'
                  title={peerReviewer.name}
                  className='w-3 h-3   rounded-full mx-1'
                />
              )}
            </span>
          )}
          {!peerReviewed && (
            <span className='bg-red-300 text-red-600 text-xs px-3 py-1 rounded-2xl'>
              Peer
            </span>
          )}

          {chairpersonReviewed && (
            <span
              className='inline-flex items-center bg-orange-300 text-orange-500 text-xs px-3  py-1 rounded-2xl'
              title={
                chairpersonSuggested
                  ? "Reviewed with Suggestions"
                  : "Reviewed, No Suggestions"
              }
            >
              Chairperson
              {chairpersonSuggested && (
                <img
                  src={chairpersonReviewer.image}
                  alt='Chairperson'
                  title={chairpersonReviewer.name}
                  className='w-3 h-3   rounded-full mx-1'
                />
              )}
              {!chairpersonSuggested && (
                <img
                  src={chairpersonReviewer.image}
                  alt='Chairperson'
                  title={chairpersonReviewer.name}
                  className='w-3 h-3   rounded-full mx-1'
                />
              )}
            </span>
          )}

          {!chairpersonReviewed && (
            <span className='bg-red-300 text-red-600 text-xs px-3 py-1 rounded-2xl'>
              Chairperson
            </span>
          )}
          {coordinatorReviewed && (
            <span
              className='inline-flex items-center bg-green-300 text-green-900 text-xs px-3 py-1 rounded-2xl'
              title={
                coordinatorSuggested
                  ? "Reviewed with Suggestions"
                  : "Reviewed, No Suggestions"
              }
            >
              Coordinator{" "}
              {coordinatorSuggested && (
                <img
                  src={coordinatorReviewer.image}
                  alt='Coordinator'
                  title={coordinatorReviewer.name}
                  className='w-3 h-3   rounded-full mx-1'
                />
              )}
              {!coordinatorSuggested && (
                <img
                  src={coordinatorReviewer.image}
                  alt='Coordinator'
                  title={coordinatorReviewer.name}
                  className='w-3 h-3   rounded-full mx-1'
                />
              )}
            </span>
          )}
          {!coordinatorReviewed && (
            <span className='bg-red-300 text-red-600 text-xs px-3 py-1 rounded-2xl'>
              Coordinator
            </span>
          )}
        </>
      )}
      {(im.status === "DEPARTMENT_REVIEWED" ||
        im.status === "DEPARTMENT_REVISED") && (
        <>
          {coordinatorEndorsed && (
            <span
              className='inline-flex items-center bg-green-300 text-green-900 text-xs px-3 py-1 rounded-2xl'
              title='Endorsement Ready'
            >
              Coordinator{" "}
              {coordinatorEndorsed && (
                <img
                  src={coordinatorEndorser.image}
                  alt='Coordinator'
                  title={coordinatorEndorser.name}
                  className='w-3 h-3   rounded-full mx-1'
                />
              )}
            </span>
          )}
          {!coordinatorEndorsed && (
            <span
              className='bg-red-300 text-red-600 text-xs px-3 py-1 rounded-2xl'
              title='Pending Endorsement'
            >
              Coordinator
            </span>
          )}
          {deanEndorsed && (
            <span
              className='inline-flex items-center bg-green-300 text-green-900 text-xs px-3 py-1 rounded-2xl'
              title='Endorsement Ready'
            >
              Dean{" "}
              {deanEndorsed && (
                <img
                  src={deanEndorser.image}
                  alt='Dean'
                  title={deanEndorser.name}
                  className='w-3 h-3   rounded-full mx-1'
                />
              )}
            </span>
          )}
          {!deanEndorsed && (
            <span
              className='bg-red-300 text-red-600 text-xs px-3 py-1 rounded-2xl'
              title='Pending Endorsement'
            >
              Dean
            </span>
          )}
        </>
      )}
      {im.status === "DEPARTMENT_ENDORSED" && (
        <>
          {imdCoordinatorSuggested && (
            <span
              className='inline-flex items-center bg-green-300 text-green-900 text-xs px-3 py-1 rounded-2xl'
              title='Suggestions Ready'
            >
              IMD Coordinator{" "}
              {imdCoordinatorSuggested && (
                <img
                  src={imdCoordinatorEndorser.image}
                  alt='IMD Coordinator'
                  title={imdCoordinatorEndorser.name}
                  className='w-3 h-3   rounded-full mx-1'
                />
              )}
            </span>
          )}
          {!imdCoordinatorSuggested && (
            <span
              className='bg-red-300 text-red-600 text-xs px-3 py-1 rounded-2xl'
              title='Pending Suggestions'
            >
              IMD Coordinator
            </span>
          )}
        </>
      )}
      {(im.status === "CITL_REVIEWED" ||
        im.status === "CITL_REVISED" ||
        im.status === "CITL_ENDORSED") && (
        <>
          {imdCoordinatorEndorsed && (
            <span
              className='inline-flex items-center bg-green-300 text-green-900 text-xs px-3 py-1 rounded-2xl'
              title='Endorsement Ready'
            >
              IMD Coordinator{" "}
              {imdCoordinatorEndorsed && (
                <img
                  src={imdCoordinatorEndorser.image}
                  alt='IMD Coordinator'
                  title={imdCoordinatorEndorser.name}
                  className='w-3 h-3   rounded-full mx-1'
                />
              )}
            </span>
          )}
          {!imdCoordinatorEndorsed && (
            <span
              className='bg-red-300 text-red-600 text-xs px-3 py-1 rounded-2xl'
              title='Pending Endorsement'
            >
              IMD Coordinator
            </span>
          )}
        </>
      )}
    </div>
  );
}
