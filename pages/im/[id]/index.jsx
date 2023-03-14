import Layout from "@/components/layout/Layout";
import useUser from "@/hooks/useUser";
import frontendReadIM from "@/services/frontend/im/frontendReadIM";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ViewIM() {
  const router = useRouter();
  const { user } = useUser();
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
              className='px-5 py-2.5 mr-2 shadow-xl text-sm font-medium text-CITLDarkBlue bg-CITLOrange border rounded-md  hover:text-CITLOrange hover:bg-transparent focus:outline-none border-CITLOrange '
            >
              Versions
            </Link>
            {user?.ActiveFaculty?.Faculty?.id !== iM?.ownerId &&
              user?.ActiveFaculty?.ActiveCoordinator && (
                <Link
                  href={`/im/${iM?.id}/review/coordinator`}
                  className='text-CITLWhite bg-CITLDarkBlue font-medium text-sm px-5 py-2.5 mr-2 rounded-md shadow-xl  hover:text-CITLDarkBlue hover:bg-transparent focus:outline-none border border-CITLDarkBlue'
                >
                  Coordinator Review
                </Link>
              )}
            {user?.ActiveFaculty?.Faculty?.id !== iM?.ownerId &&
              user?.ActiveFaculty?.ActiveChairperson && (
                <Link
                  href={`/im/${iM?.id}/review/chairperson`}
                  className='text-CITLWhite bg-CITLDarkBlue font-medium text-sm px-5 py-2.5 mr-2 rounded-md shadow-xl  hover:text-CITLDarkBlue hover:bg-transparent focus:outline-none border border-CITLDarkBlue'
                >
                  Chairperson Review
                </Link>
              )}
            {user?.ActiveFaculty?.Faculty?.id !== iM?.ownerId && (
              <Link
                href={`/im/${iM?.id}/review/peer`}
                className='text-CITLWhite bg-CITLDarkBlue font-medium text-sm px-5 py-2.5 mr-2 rounded-md shadow-xl  hover:text-CITLDarkBlue hover:bg-transparent focus:outline-none border border-CITLDarkBlue'
              >
                Peer Review
              </Link>
            )}
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
