import AdminLayout from "@/components/admin/AdminLayout";
import AdminCoordinatorSuggestion from "@/components/admin/suggestion/AdminCoordinatorSuggestion";
import { sections } from "@/constants/questions";
import useIM from "@/hooks/useIM";
import frontendReadCoordinatorReview from "@/services/frontend/admin/coordinator_review/frontendReadCoordinatorReview";
import frontendReadCoordinatorReviewItems from "@/services/frontend/admin/coordinator_review_item/frontendReadCoordinatorReviewItems";
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

export default function CoordinatorReview() {
  const [coordinatorReview, setCoordinatorReview] = useState();
  const [coordinatorReviewItems, setCoordinatorReviewItems] = useState([]);
  const router = useRouter();
  const { iM, iMError, iMLoading, refreshIM } = useIM(coordinatorReview?.iMId);

  useEffect(() => {
    if (!router.query.id) return;
    let subscribe = true;

    frontendReadCoordinatorReview(router.query.id).then((res) => {
      if (!subscribe) return;

      setCoordinatorReview(res);
    });

    return () => {
      subscribe = false;
    };
  }, [router.query.id]);

  useEffect(() => {
    if (!coordinatorReview) return;
    let subscribe = true;

    frontendReadCoordinatorReviewItems({
      coordinatorReviewId: coordinatorReview.id,
    }).then((res) => {
      if (!subscribe) return;

      setCoordinatorReviewItems(res.data);
    });

    return () => {
      subscribe = false;
    };
  }, [coordinatorReview]);

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
                  src={coordinatorReview?.Coordinator?.Faculty?.user?.image}
                />
                <Typography variant='h6'>
                  {coordinatorReview?.Coordinator?.Faculty?.user?.name}
                </Typography>

                <Divider sx={{ width: "30%", mb: 2 }}>
                  <Typography variant='body2'>Reviewer</Typography>
                </Divider>
                <Typography>{coordinatorReview?.IM?.title}</Typography>
              </Stack>
            </CardContent>
          </Card>
          {coordinatorReviewItems.length > 0 &&
            sections.map((section) => (
              <ReviewSection
                key={section.title}
                section={section}
                reviewItems={coordinatorReviewItems}
              />
            ))}

          {coordinatorReview && (
            <Card sx={{ mb: 1 }}>
              <AdminCoordinatorSuggestion
                coordinatorReview={coordinatorReview}
              />
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
