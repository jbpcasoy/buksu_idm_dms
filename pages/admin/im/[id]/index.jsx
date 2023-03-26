import AdminLayout from "@/components/admin/AdminLayout";
import AdminChairpersonSuggestion from "@/components/admin/suggestion/AdminChairpersonSuggestion";
import AdminCoordinatorSuggestion from "@/components/admin/suggestion/AdminCoordinatorSuggestion";
import AdminPeerSuggestion from "@/components/admin/suggestion/AdminPeerSuggestion";
import useIM from "@/hooks/useIM";
import { Alert, AlertTitle, Box, Grid, Toolbar } from "@mui/material";
import { useRouter } from "next/router";

export default function AdminIMViewPage() {
  const router = useRouter();
  const { iM, iMError, iMLoading } = useIM(router?.query?.id);
  return (
    <AdminLayout>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Box className='h-screen overflow-y-auto'>
            {iM?.SubmittedPeerReview?.PeerReview && (
              <AdminPeerSuggestion
                peerReview={iM?.SubmittedPeerReview?.PeerReview}
              />
            )}
            {!iM?.SubmittedPeerReview?.PeerReview && (
              <Alert severity='info'>
                <AlertTitle>No Peer Suggestion</AlertTitle>
                There are no peer suggestions yet.
              </Alert>
            )}
            {iM?.SubmittedChairpersonReview?.ChairpersonReview && (
              <AdminChairpersonSuggestion
                chairpersonReview={
                  iM?.SubmittedChairpersonReview?.ChairpersonReview
                }
              />
            )}
            {!iM?.SubmittedChairpersonReview?.ChairpersonReview && (
              <Alert severity='info'>
                <AlertTitle>No Chairperson Suggestion</AlertTitle>
                There are no chairperson suggestions yet.
              </Alert>
            )}
            {iM?.SubmittedCoordinatorReview?.CoordinatorReview && (
              <AdminCoordinatorSuggestion
                coordinatorReview={
                  iM?.SubmittedCoordinatorReview?.CoordinatorReview
                }
              />
            )}
            {!iM?.SubmittedCoordinatorReview?.CoordinatorReview && (
              <Alert severity='info'>
                <AlertTitle>No Coordinator Suggestion</AlertTitle>
                There are no coordinator suggestions yet.
              </Alert>
            )}
            <Toolbar />
          </Box>
        </Grid>
        <Grid item xs={12} sm={8}>
          {process.env.NODE_ENV === "production" && iM && (
            <iframe
              src={`https://docs.google.com/gview?url=${process.env.NEXT_PUBLIC_HOST_URL}/api/download/file/${iM?.ActiveFile?.File.fileName}&embedded=true`}
              className='w-full h-full'
            />
          )}
          {process.env.NODE_ENV !== "production" && iM && (
            <iframe
              src={`${process.env.NEXT_PUBLIC_HOST_URL}/api/download/file/${iM?.ActiveFile?.File.fileName}`}
              className='w-full h-full'
            />
          )}
        </Grid>
      </Grid>
    </AdminLayout>
  );
}
