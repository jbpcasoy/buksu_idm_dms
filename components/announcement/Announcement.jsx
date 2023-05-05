import Link from "next/link";
import { useRouter } from "next/router";

export default function Announcement({ title, description, link }) {
  const router = useRouter();
  return (
    <div className=' '>
      <div className='px-8 py-4 overflow-hidden grid grid-flow-col-2 h-full'>
        <div className='md:grid md:grid-cols-3'>
          <div className='md:col-span-2'>
            <div className=' grid text-left  mt-12'>
              <div className=''>
                <h3 className='text-2xl font-semibold'>{title}</h3>
                <p className=''>{description}</p>
                <Link
                  className='inline-flex items-center border border-CITLDarkBlue rounded-md py-1 px-2.5 mt-2'
                  href={link}
                >
                  Read more
                  <svg
                    className='w-3 h-3 ml-2'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </Link>
              </div>
              {/* <li>
              <img
                src='/IMAGES/DSC_6510.jpg'
                className='flex w-64 rounded-lg m-2 object-cover relative'
                alt='...'
              />
            </li> */}
            </div>
          </div>
          <div
            className='rounded-lg bg-cover bg-center hidden md:block'
            style={{
              backgroundImage: "url(/IMAGES/DSC_6510.jpg)",
            }}
          >
            {/* <img
            src='/IMAGES/DSC_6510.jpg'
            className='flex w-full rounded-lg  '
            alt='...'
          /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
