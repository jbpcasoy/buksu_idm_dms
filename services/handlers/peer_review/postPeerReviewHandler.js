import { authOptions } from "@/pages/api/auth/[...nextauth]";
import createPeerReview from "@/services/api/peer_review/createPeerReview";
import getUserByEmail from "@/services/helpers/getUserByEmail";
import { getServerSession } from "next-auth";

export default async function postPeerReviewHandler(req, res) {
  const { iMId } = req.body;
  const session = await getServerSession(req, res, authOptions);

  const user = await getUserByEmail(session?.user?.email);

  // TODO ensure that user does not own im
  const peerReview = await createPeerReview({
    facultyId: user.ActiveFaculty.facultyId,
    iMId,
  });
  return res.status(201).json(peerReview);
}
