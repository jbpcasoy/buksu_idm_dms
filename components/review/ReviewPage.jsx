import Layout from "@/components/layout/Layout";
import moment from "moment";
import Link from "next/link";
import IMPreview from "../IMPreview";
import ProgressBar from "../ProgressBar";

export default function ReviewPage({ step, steps, reviewingAs, iM }) {
  return (
    <Layout>
      <div className='sm:pt-'>
        <div className='flex items-center border border-CITLGray-lighter bg-CITLGray-light m-2 p-3 relative rounded-lg shadow-lg overflow-hidden'>
          <div className='w-full '>
            <ProgressBar max={steps.length} value={step} />

            <div className='px-2 pt-10'>
              <h2 className='text-CITLDarkBlue font-bold text-2xl '>
                Instructional Material Review Form{" "}
                <span className='text-white bg-CITLOrange px-3 py-1 rounded-lg'>
                  {reviewingAs}
                </span>
              </h2>
              <p className='mb-8 text-sm'>Implementation Phase</p>

              {steps[step]}
            </div>
          </div>
        </div>
      </div>

      <div className='p-2'>
        <div className='flex items-center justify-between pb-2'>
          <div>
            <h2 className='text-lg font-medium'>{iM?.title}</h2>
            <div className='lg:flex sm:flex-rows-2 gap-3'>
              <h2 className='text-xs  text-CITLGray-main'>
                Type: <span className='text-xs font-medium '>{iM?.type}</span>
              </h2>
              <h2 className='text-xs  text-CITLGray-main'>
                Status:{" "}
                <span className='text-xs font-medium '>{iM?.status}</span>
              </h2>
            </div>
            <div className='lg:flex sm:flex-rows-2 gap-3'>
              <h2 className='text-xs  text-CITLGray-main'>
                Department:{" "}
                <span className='text-xs font-medium '>
                  {iM?.owner?.department?.name} |{" "}
                  {iM?.owner?.department?.college?.name}
                </span>
              </h2>
            </div>
            <div className='flex flex-cols mt-3'>
              <Link href={`/profile/${iM?.owner?.user?.id}`}>
                <img
                  src={iM?.owner?.user?.image}
                  className='h-8 w-8 rounded-full sm:h-8 object-center object-cover'
                  alt='owner'
                ></img>
              </Link>
              <div className=''>
                <h2 className='text-xs font-semibold text-CITLGray-main pl-3 -mb-1'>
                  {iM?.owner?.user?.name}
                </h2>
                <time className='text-xs text-CITLGray-main pl-3 '>
                  {iM?.createdAt &&
                    moment(iM?.createdAt).format("MMMM D, YYYY | h:mm A")}
                </time>
              </div>
            </div>
          </div>
        </div>
        <IMPreview iM={iM} />
      </div>
    </Layout>
  );
}
