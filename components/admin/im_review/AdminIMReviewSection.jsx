import adminIMReviewSectionDelete from "@/services/frontend/admin/im_review/adminIMReviewSectionDelete";
import AdminDeleteIMReviewSectionAlert from "@/views/admin/im_review_section/AdminDeleteIMReviewSectionAlert";
import AdminIMReviewSectionActionsMenu from "@/views/admin/im_review_section/AdminIMReviewSectionActionsMenu";
import adminIMReviewSectionEdit from "@/views/admin/im_review_section/adminIMReviewSectionEdit";
import AdminIMReviewSectionUpdateForm from "@/views/admin/im_review_section/AdminIMReviewSectionUpdateForm";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

export default function AdminIMReviewSection({ section }) {
  const router = useRouter();
  const [state, setState] = useState({ openDelete: false, openUpdate: false });

  const [sectionData, setSectionData] = useState(section);

  function handleToggleDelete(open) {
    return setState((prev) => ({ ...prev, openDelete: open }));
  }

  function onDelete() {
    adminIMReviewSectionDelete(section.id).then((res) => {
      setSectionData(null);
    });
  }

  function handleToggleUpdate(open) {
    return setState((prev) => ({ ...prev, openUpdate: open }));
  }

  async function onEdit(values) {
    const { title } = values;
    return adminIMReviewSectionEdit(section.id, {
      title,
    }).then((res) => {
      handleToggleUpdate(false);
      setSectionData(res);
    });
  }

  if (!sectionData) return null;

  return (
    <Card variant='outlined'>
      <CardHeader
        title={sectionData?.title}
        action={
          <AdminIMReviewSectionActionsMenu
            onDelete={() => handleToggleDelete(true)}
            onEdit={() => handleToggleUpdate(true)}
          />
        }
      />
      <CardContent>
        <Typography>{"<Question Here>"}</Typography>
      </CardContent>

      <AdminDeleteIMReviewSectionAlert
        open={state.openDelete}
        onClose={() => handleToggleDelete(false)}
        onAgree={onDelete}
      />

      <AdminIMReviewSectionUpdateForm
        initialValues={{ title: sectionData.title }}
        onClose={() => handleToggleUpdate(false)}
        open={state.openUpdate}
        onSubmit={onEdit}
      />
    </Card>
  );
}
