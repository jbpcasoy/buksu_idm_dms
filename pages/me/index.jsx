import Layout from "@/components/layout/Layout";
import UserContext from "@/contexts/UserContext";
import ProfileFormView from "@/views/ProfileFormView";
import axios from "axios";
import { initModals } from "flowbite";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

export default function Me() {
  const { user, userLoading, userError } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    initModals();
  });

  return (
    <Layout>
      <ProfileFormView
        onSubmit={(profile) => {
          axios.put(`/api/user/${user.id}`, profile).then((res) => {
            router.reload();
          });
        }}
        defaultName={user?.name}
        department={user?.ActiveFaculty?.Faculty?.department?.name}
        college={user?.ActiveFaculty?.Faculty?.department?.college?.name}
        onUploadImage={async (e) => {
          const profilePicture = e.target.files[0];
          const formData = new FormData();
          formData.append("file", profilePicture, profilePicture.name);
          return axios
            .post(`/api/upload/profile_picture`, formData)
            .then(async (res) => {
              return axios
                .put(`/api/user/${user.id}`, {
                  image: `/api/download/profile_picture/${user.id}`,
                })
                .then((res) => {
                  router.reload();
                });
            });
        }}
      />
    </Layout>
  );
}
