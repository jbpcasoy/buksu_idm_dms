import WithSidebar from "@/components/WithSidebar";
import frontendReadIM from "@/services/frontend/im/frontendReadIM";
import Layout from "@/views/layout/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function viewIM() {
  const router = useRouter();
  const [iM, setIM] = useState();

  useEffect(() => {
    const id = router?.query?.id;
    if (!id) return;

    frontendReadIM(id).then((res) => {
      setIM(res);
    });
  }, [router?.query?.id]);

  return (
    <Layout>
      <WithSidebar>
        <div className="bg-white rounded-md p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">{iM?.title}</h2>
            <div className="items-left">
              <a
                href={`/im/${iM?.id}/versions`}
                className="items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-CITLDarkBlue rounded-lg "
              >
                Versions
              </a>{" "}
              
              <a
                href="/review/form"
                className="items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-CITLDarkBlue rounded-lg "
              >
                Review
              </a>
            </div>
          </div>
          {/* TODO change pdf url into dynamic */}
          <iframe
            src={`/api/download/file/${iM?.ActiveFile?.File.fileName}`}
            className="w-full h-screen"
          />
        </div>
      </WithSidebar>
    </Layout>
  );
}
