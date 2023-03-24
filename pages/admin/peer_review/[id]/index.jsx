import AdminLayout from "@/components/admin/AdminLayout";
import AdminPeerSuggestion from "@/components/admin/suggestion/AdminPeerSuggestion";
import { sections } from "@/constants/questions";
import useIM from "@/hooks/useIM";
import frontendReadPeerReview from "@/services/frontend/admin/peer_review/adminReadPeerReview";
import frontendReadPeerReviewItems from "@/services/frontend/admin/peer_review_item/frontendReadPeerReviewItems";
import ReviewSection from "@/views/admin/review/ReviewSection";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PeerReview() {
  const [peerReview, setPeerReview] = useState();
  const [peerReviewItems, setPeerReviewItems] = useState([]);
  const router = useRouter();
  const { iM, iMError, iMLoading, refreshIM } = useIM(peerReview?.iMId);

  useEffect(() => {
    if (!router.query.id) return;
    let subscribe = true;

    frontendReadPeerReview(router.query.id).then((res) => {
      if (!subscribe) return;

      setPeerReview(res);
    });

    return () => {
      subscribe = false;
    };
  }, [router.query.id]);

  useEffect(() => {
    if (!peerReview) return;
    let subscribe = true;

    frontendReadPeerReviewItems({ peerReviewId: peerReview.id }).then((res) => {
      if (!subscribe) return;

      setPeerReviewItems(res.data);
    });

    return () => {
      subscribe = false;
    };
  }, [peerReview]);

  return (
    <AdminLayout>
      <Box sx={{ my: 1 }}>
        <Container maxWidth='lg'>
          <Card variant='outlined' sx={{ mb: 1 }}>
            <CardContent>
              <Stack
                direction='column'
                justifyContent='center'
                alignItems='center'
              >
                <Avatar
                  sx={{ width: 100, height: 100 }}
                  src={peerReview?.Faculty?.user?.image}
                />
                <Typography variant='h6'>
                  {peerReview?.Faculty?.user?.name}
                </Typography>

                <Divider sx={{ width: "30%", mb: 2 }}>
                  <Typography variant='body2'>Reviewer</Typography>
                </Divider>
                <Typography>{peerReview?.IM?.title}</Typography>
              </Stack>
            </CardContent>
          </Card>
          {peerReviewItems.length > 0 &&
            sections.map((section) => (
              <ReviewSection
                key={section.title}
                section={section}
                reviewItems={peerReviewItems}
              />
            ))}

          {peerReview && (
            <Card sx={{ mb: 1 }}>
              <AdminPeerSuggestion peerReview={peerReview} />
            </Card>
          )}

          {process.env.NODE_ENV === "production" && iM && (
            <iframe
              src={`https://docs.google.com/gview?url=${process.env.NEXT_PUBLIC_HOST_URL}/api/download/file/${iM?.ActiveFile?.File.fileName}&embedded=true`}
              className='w-full h-screen'
            />
          )}
          {process.env.NODE_ENV !== "production" && iM && (
            <iframe
              src={`${process.env.NEXT_PUBLIC_HOST_URL}/api/download/file/${iM?.ActiveFile?.File.fileName}`}
              className='w-full h-screen'
            />
          )}
        </Container>
      </Box>
    </AdminLayout>
  );
}
