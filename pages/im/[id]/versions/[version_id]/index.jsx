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
