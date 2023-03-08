import { authOptions } from "@/pages/api/auth/[...nextauth]";
import createChairpersonReview from "@/services/api/chairperson_review/createChairpersonReview";
import getUserByEmail from "@/services/helpers/getUserByEmail";
import { getServerSession } from "next-auth";

export default async function postChairpersonReviewHandler(req, res) {
  const { iMId } = req.body;
  const session = await getServerSession(req, res, authOptions);

  const user = await getUserByEmail(session?.user?.email);

  // TODO ensure that user does not own im
  const chairpersonReview = await createChairpersonReview({
    facultyId: user.ActiveFaculty.facultyId,
    iMId,
  });
  return res.status(201).json(chairpersonReview);
}
