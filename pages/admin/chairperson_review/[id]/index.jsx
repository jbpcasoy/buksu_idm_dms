import AdminLayout from "@/components/admin/AdminLayout";
import AdminChairpersonSuggestion from "@/components/admin/suggestion/AdminChairpersonSuggestion";
import { sections } from "@/constants/questions";
import useIM from "@/hooks/useIM";
import frontendReadChairpersonReview from "@/services/frontend/admin/chairperson_review/frontendReadChairpersonReview";
import frontendReadChairpersonReviewItems from "@/services/frontend/admin/chairperson_review_item/frontendReadChairpersonReviewItems";
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

export default function ChairpersonReview() {
  const [chairpersonReview, setChairpersonReview] = useState();
  const [chairpersonReviewItems, setChairpersonReviewItems] = useState([]);
  const router = useRouter();
  const { iM, iMError, iMLoading, refreshIM } = useIM(chairpersonReview?.iMId);

  useEffect(() => {
    if (!router.query.id) return;
    let subscribe = true;

    frontendReadChairpersonReview(router.query.id).then((res) => {
      if (!subscribe) return;

      setChairpersonReview(res);
    });

    return () => {
      subscribe = false;
    };
  }, [router.query.id]);

  useEffect(() => {
    if (!chairpersonReview) return;
    let subscribe = true;

    frontendReadChairpersonReviewItems({
      chairpersonReviewId: chairpersonReview.id,
    }).then((res) => {
      if (!subscribe) return;

      setChairpersonReviewItems(res.data);
    });

    return () => {
      subscribe = false;
    };
  }, [chairpersonReview]);

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
                  src={chairpersonReview?.Chairperson?.Faculty?.user?.image}
                />
                <Typography variant='h6'>
                  {chairpersonReview?.Chairperson?.Faculty?.user?.name}
                </Typography>

                <Divider sx={{ width: "30%", mb: 2 }}>
                  <Typography variant='body2'>Reviewer</Typography>
                </Divider>
                <Typography>{chairpersonReview?.IM?.title}</Typography>
              </Stack>
            </CardContent>
          </Card>
          {chairpersonReviewItems.length > 0 &&
            sections.map((section) => (
              <ReviewSection
                key={section.title}
                section={section}
                reviewItems={chairpersonReviewItems}
              />
            ))}

          {chairpersonReview && (
            <Card sx={{ mb: 1 }}>
              <AdminChairpersonSuggestion
                chairpersonReview={chairpersonReview}
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
