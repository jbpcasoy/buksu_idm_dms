import Layout from "@/components/layout/Layout";
import ToggleModal from "@/components/ToggleModal";
import { useSession } from "next-auth/react";

export default function Test() {
  const { data: session } = useSession({
    required: true,
  });
  return (
    <Layout>
      <div>
        <ToggleModal />
      </div>
    </Layout>
  );
}
