import Layout from "@/components/layout/Layout";
import useFile from "@/hooks/file/useFile";
import useIM from "@/hooks/useIM";
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
            <h2 className='text-lg font-medium'>{iM?.title}</h2>
            <h2 className='text-xs  text-CITLGray-main'>
              Type: <span className='text-xs font-medium '>{iM?.type}</span>
            </h2>
          </div>
          <div className='items-left'>
            <Link
              href={`/im/${iM?.id}`}
              className='text-CITLDarkBlue font-medium border border-CITLGray-main p-2 rounded hover:bg-CITLOrange hover:border-CITLOrange'
            >
              <svg
                aria-hidden='true'
                class='w-3 h-3  text-orange-500 rounded-full ml-1'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clip-rule='evenodd'
                ></path>
              </svg>
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
