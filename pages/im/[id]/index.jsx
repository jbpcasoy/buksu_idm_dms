import Layout from "@/components/layout/Layout";
import frontendReadIM from "@/services/frontend/im/frontendReadIM";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ViewIM() {
  const router = useRouter();
  const [iM, setIM] = useState();

  useEffect(() => {
    const id = router?.query?.id;
    if (!id) return;

    frontendReadIM(id).then((res) => {
      setIM(res);
    });
  }, [router?.query?.id]);

  console.log({ router });

  return (
    <Layout>
      <div className="bg-white rounded-md p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">{iM?.title}</h2>
          <div className="items-left">
            <Link
              href={`/im/${iM?.id}/versions`}
              className="text-CITLDarkBlue border border-CITLGray-main p-2 rounded hover:bg-CITLOrange"
            >
              Versions
            </Link>{" "}
            <Link
              href="#"
              className="text-CITLDarkBlue border border-CITLGray-main p-2 rounded hover:bg-CITLOrange"
            >
              Download
            </Link>{" "}
            <Link
              href="/review/form"
              className="text-CITLWhite bg-blue-500 p-2 rounded hover:bg-CITLOrange"
            >
              Review
            </Link>
          </div>
          {/* TODO change pdf url into dynamic */}
          {process.env.NODE_ENV === "production" && (
            <iframe
              src={`https://docs.google.com/gview?url=${process.env.NEXT_PUBLIC_HOST_URL}/api/download/file/${iM?.ActiveFile?.File.fileName}&embedded=true`}
              className='w-full h-screen'
            />
          )}
          {process.env.NODE_ENV !== "production" && (
            <iframe
              src={`${process.env.NEXT_PUBLIC_HOST_URL}/api/download/file/${iM?.ActiveFile?.File.fileName}`}
              className='w-full h-screen'
            />
          )}
        </div>
        {/* TODO change pdf url into dynamic */}
        <iframe
          src={`/api/download/file/${iM?.ActiveFile?.File.fileName}`}
          className="w-full h-screen"
        />
      </div>
    </Layout>
  );
}
