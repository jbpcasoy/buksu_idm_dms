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
      <div className='bg-white rounded-md p-4'>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-lg font-medium'>{iM?.title}</h2>
          <div className='items-left'>
            <Link
              href={`/im/${iM?.id}/versions`}
              className='px-5 py-2.5 mr-2 shadow-xl text-sm font-medium text-CITLDarkBlue bg-CITLOrange border rounded-md  hover:text-CITLDarkBlue hover:border-CITLOrange focus:outline-none '
            >
              Versions
            </Link>{" "}
            <Link
              href={`/im/${iM?.id}/review`}
              className='text-CITLWhite bg-CITLDarkBlue font-medium text-sm px-5 py-2.5 mr-2 rounded-md shadow-xl  hover:text-CITLWhite hover:border-CITLDarkBlue focus:outline-none'
            >
              Review
            </Link>
          </div>
        </div>
        {/* TODO change pdf url into dynamic */}
        {process.env.NODE_ENV === "production" && iM && (
          <iframe
            src={`https://docs.google.com/gview?url=${process.env.NEXT_PUBLIC_HOST_URL}/api/download/file/${iM?.ActiveFile?.File.fileName}&embedded=true`}
            className='w-full h-screen'
          />
        )}
        {process.env.NODE_ENV !== "production" && iM && (
          <iframe
            src={`${process.env.NEXT_PUBLIC_HOST_URL}/api/download/file/${iM?.ActiveFile?.File.fileName}`}
            className='w-full h-screen'
          />
        )}
      </div>
    </Layout>
  );
}
