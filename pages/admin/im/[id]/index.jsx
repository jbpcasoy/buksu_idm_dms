import AdminLayout from "@/components/admin/AdminLayout";
import AdminChairpersonSuggestion from "@/components/admin/suggestion/AdminChairpersonSuggestion";
import AdminCoordinatorSuggestion from "@/components/admin/suggestion/AdminCoordinatorSuggestion";
import AdminPeerSuggestion from "@/components/admin/suggestion/AdminPeerSuggestion";
import useIM from "@/hooks/useIM";
import { Box, Grid, Toolbar } from "@mui/material";
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
            {iM?.SubmittedChairpersonReview?.ChairpersonReview && (
              <AdminChairpersonSuggestion
                chairpersonReview={
                  iM?.SubmittedChairpersonReview?.ChairpersonReview
                }
              />
            )}
            {iM?.SubmittedCoordinatorReview?.CoordinatorReview && (
              <AdminCoordinatorSuggestion
                coordinatorReview={
                  iM?.SubmittedCoordinatorReview?.CoordinatorReview
                }
              />
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
