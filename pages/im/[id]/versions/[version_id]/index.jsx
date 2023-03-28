import Layout from "@/components/layout/Layout";
import useFile from "@/hooks/file/useFile";
import frontendReadIM from "@/services/frontend/im/frontendReadIM";
import IM from "@/views/im/IM";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function IMVersion() {
  const router = useRouter();
  const [iM, setIM] = useState();
  const { file, fileLoading, fileError } = useFile(router?.query?.version_id);

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
      <div className='bg-white rounded-md p-4'>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-lg font-medium'>{IM?.title}</h2>
          {/* <h2 className="text-xs uppercase font-medium">
            Version 1677046830191
          </h2> */}
          <div className='items-left'>
            <Link
              href={`/im/${iM?.id}`}
              className='text-CITLDarkBlue font-medium border border-CITLGray-main p-2 rounded hover:bg-CITLOrange hover:border-CITLOrange'
            >
              Current Version
            </Link>{" "}
          </div>
        </div>

        {process.env.NODE_ENV === "production" && iM && (
          <iframe
            src={`https://docs.google.com/gview?url=${process.env.NEXT_PUBLIC_HOST_URL}/api/download/file/${file?.fileName}&embedded=true`}
            className='w-full h-screen'
          />
        )}
        {process.env.NODE_ENV !== "production" && iM && (
          <iframe
            src={`${process.env.NEXT_PUBLIC_HOST_URL}/api/download/file/${file?.fileName}`}
            className='w-full h-screen'
          />
        )}
      </div>
    </Layout>
  );
}
