import frontendDeleteAnnouncement from "@/services/frontend/announcement/frontendDeleteAnnouncement";
import frontendUpdateAnnouncement from "@/services/frontend/announcement/frontendUpdateAnnouncement";
import AdminAnnouncementView from "@/views/admin/announcement/AdminAnnouncementView";
import { useSnackbar } from "notistack";
import { useState } from "react";

export default function AdminAnnouncement({ announcement }) {
  const [announcementData, setAnnouncementData] = useState(announcement);
  const { closeSnackbar, enqueueSnackbar } = useSnackbar();

  async function onEdit(values) {
    const { title, description, link } = values;

    return frontendUpdateAnnouncement(announcement.id, {
      title,
      description,
      link,
    })
      .then((res) => {
        setAnnouncementData(res);
        enqueueSnackbar({
          message: "Announcement updated successfully",
          variant: "success",
        });
      })
      .catch((err) => {
        enqueueSnackbar({
          message: "Failed to update announcement",
          variant: "error",
        });
      });
  }

  async function onDelete() {
    return frontendDeleteAnnouncement(announcement.id)
      .then((res) => {
        setAnnouncementData(null);
        enqueueSnackbar({
          message: "Announcement deleted successfully",
          variant: "success",
        });
      })
      .catch((err) => {
        enqueueSnackbar({
          message: "Failed to delete announcement",
          variant: "error",
        });
      });
  }

  if (!announcementData) return null;

  return (
    <AdminAnnouncementView
      title={announcementData.title}
      description={announcementData.description}
      link={announcementData.link}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  );
}
