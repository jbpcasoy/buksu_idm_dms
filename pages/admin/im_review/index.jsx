import AdminLayout from "@/components/admin/AdminLayout";
import AdminIMReviewSection from "@/components/admin/im_review/AdminIMReviewSection";
import adminCreateIMReviewSection from "@/services/frontend/admin/im_review/adminCreateIMReviewSection";
import adminReadIMReviewSections from "@/services/frontend/admin/im_review/adminReadIMReviewSections";
import AddIMReviewSectionDialog from "@/views/admin/im_review_section/AddIMReviewSectionDialog";
import { Button, Container, Stack } from "@mui/material";
import Error from "next/error";
import { useEffect, useState } from "react";

export default function AdminIMReviewPage() {
  return <Error statusCode={404} />;

  /**
   * This page was not yet supported, as it was too time consuming.
   */

  const [state, setState] = useState({
    openAdd: false,
  });
  const [sections, setSections] = useState([]);

  useEffect(() => {
    let subscribe = true;
    adminReadIMReviewSections().then((res) => {
      if (!subscribe) return;
      setSections(res.data);
    });

    return () => {
      subscribe = false;
    };
  }, [state]);

  function handleToggleAddModal(open) {
    return setState((prev) => ({ ...prev, openAdd: open }));
  }

  async function onAddSection(values) {
    const { title } = values;
    return adminCreateIMReviewSection({ title }).then((res) => {
      handleToggleAddModal(false);
    });
  }

  return (
    <AdminLayout>
      <Container maxWidth='sm' sx={{ mt: 5 }}>
        <Stack gap={1}>
          {sections.map((section) => (
            <AdminIMReviewSection section={section} key={section.id} />
          ))}
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='center'>
          <Button
            sx={{ m: 1 }}
            variant='contained'
            onClick={() => handleToggleAddModal(true)}
          >
            Add Section
          </Button>
        </Stack>
      </Container>
      <AddIMReviewSectionDialog
        open={state.openAdd}
        onClose={() => {
          handleToggleAddModal(false);
        }}
        onSubmit={onAddSection}
      />
    </AdminLayout>
  );
}
