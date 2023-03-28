import frontendDeleteDean from "@/services/frontend/dean/frontendDeleteDean";
import AdminDeanView from "@/views/admin/dean/AdminDeanView";
import { useState } from "react";

export default function AdminDean({ dean }) {
  const [deanData, setDeanData] = useState(dean);

  async function onDelete() {
    return frontendDeleteDean(dean.id).then((res) => {
      setDeanData(null);
    });
  }

  //   async function onActivate() {
  //     try {
  //       return frontendCreateActiveFaculty({
  //         userId: deanData.userId,
  //         facultyId: deanData.id,
  //         departmentId: deanData.departmentId,
  //       }).then((res) => {
  //         setDeanData((prev) => ({ ...prev, ActiveFaculty: res }));
  //       });
  //     } catch (error) {
  //       throw error;
  //     }
  //   }

  //   async function onDeactivate() {
  //     return frontendDeleteActiveFaculty(deanData.ActiveFaculty.id).then(
  //       (res) => {
  //         setDeanData((prev) => ({ ...prev, ActiveFaculty: null }));
  //       }
  //     );
  //   }

  if (!deanData) {
    return null;
  }

  return (
    <AdminDeanView
      image={deanData?.Faculty?.user?.image}
      name={deanData?.Faculty?.user?.name}
      collegeName={deanData?.Faculty?.department?.college?.name}
      onDelete={onDelete}
      active={Boolean(deanData?.ActiveDean)}
      //   onActivate={onActivate}
      //   onDeactivate={onDeactivate}
    />
  );
}
