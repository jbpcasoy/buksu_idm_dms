import Layout from "@/components/layout/Layout";
import useFile from "@/hooks/file/useFile";
import useIM from "@/hooks/useIM";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";

export default function IMVersion() {
  const router = useRouter();
  const { file, fileLoading, fileError } = useFile(router?.query?.version_id);
  const { iM, iMLoading, iMError } = useIM(router?.query?.id);

  console.log({ router });
  return (
    <Layout>
      <div className='bg-white rounded-md p-4'>
        <div className='flex items-center justify-between mb-4'>
          <div>
            <div className='lg:flex-rows sm:flex-rows-2 gap-3'>
              <span className='text-sm font-medium'>
                {iM?.title} | {file?.id}
              </span>
              <h2 className='text-xs  text-CITLGray-main'>
                Filename:{" "}
                <span className='text-xs font-medium '>
                  {file?.originalFileName}
                </span>
              </h2>
              <h2 className='text-xs  text-CITLGray-main'>
                Type: <span className='text-xs font-medium '>{iM?.type}</span>
              </h2>
            </div>
            <div className='flex flex-cols mt-3'>
              <Link href={`/profile/${iM?.owner?.user?.id}`}>
                <img
                  src={iM?.owner?.user?.image}
                  className='w-8 h-8 rounded-full sm:h-8 object-center object-cover'
                  alt='owner'
                ></img>
              </Link>
              <div className='sm:flex-rows items-center justify-between'>
                <div>
                  <h2 className='text-xs font-semibold text-CITLGray-main pl-3 -mb-1'>
                    {iM?.owner?.user?.name}
                  </h2>
                  <time className='text-xs text-CITLGray-main pl-3 '>
                    {iM?.createdAt &&
                      moment(file?.createdAt).format("MMMM D, YYYY | h:mm A")}
                  </time>
                </div>
                <div className='flex -ml-8 mt-3'>
                  <Link
                    href={`/im/${iM?.id}`}
                    className='inline-flex items-center text-CITLWhite font-medium text-sm bg-CITLDarkBlue  px-4 py-2.5 rounded-md '
                  >
                    Current version
                    <svg
                      fill='none'
                      stroke='currentColor'
                      className='w-4 h-4 ml-2 '
                      strokeWidth='1.5'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
                      ></path>
                    </svg>
                  </Link>{" "}
                </div>
              </div>
            </div>
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
