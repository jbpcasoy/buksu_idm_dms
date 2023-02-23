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
                className="text-CITLDarkBlue border border-CITLGray-main p-2 rounded hover:bg-CITLOrange"
              >
                Versions
              </a>{" "}
              <a
                href="#"
                className="text-CITLDarkBlue border border-CITLGray-main p-2 rounded hover:bg-CITLOrange"
              >
                Download
              </a>{" "}
              <a
                href="/review/form"
                className="text-CITLWhite bg-blue-500 p-2 rounded hover:bg-CITLOrange"
              >
                Review
              </a>
            </div>
          </div>
          {/* TODO change pdf url into dynamic */}
          <iframe
            src="https://www.africau.edu/images/default/sample.pdf"
            className="w-full h-screen"
          />
        </div>
      </WithSidebar>
    </Layout>
  );
}
