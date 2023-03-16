import Link from "next/link";

export default function Home() {
  return (
    <nav className='fixed top-0 z-50 w-full bg-CITLDarkBlue border-b border-CITLGray-main'>
      <div className='px-3 py-3 border-b border-CITLGray-main lg:px-5 lg:pl-3'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-start'>
            <Link href='/' className='flex ml-2 md:mr-24'>
              <img
                src='/IMAGES/Logo.png'
                className='h-8 sm:h-10 mr-3'
                alt='BukSUIMD Logo'
              />
            </Link>
          </div>
        </div>
      </div>{" "}
      <div
        className='h-screen bg-cover bg-no-repeat bg-center'
        style={{ backgroundImage: "url('/IMAGES/DSC_6510.jpg')" }}
      >
        <div class='h-screen bg-gradient-to-t from-CITLDarkBlue'>
          <div class='h-screen flex justify-center'>
            <div class='relative justify-center h-full max-w-md md:h-auto'>
              <div class='m-5 relative bg-white opacity-90 rounded-lg shadow-lg '>
                <div class='px-6 py-12 mt-64 justify-center lg:px-8'>
                  <div className='justify-center flex mb-8'>
                    <img src='/IMAGES/CITL.png' className='h-20 ' alt='CITL' />
                  </div>
                  {/* <h3 class='mb-8 text-xl font-medium break-words leading-normal text-gray-900 '>
                    Welcome to Center for Innovative Teaching and Learning.
                  </h3> */}
                  <form class='space-y-4' action='#'>
                    <button
                      type='submit'
                      class='w-full text-CITLDarkBlue  focus:ring-2 focus:ring-inset focus:ring-CITLDarkBlue bg-white/5 p-2 ring-1 ring-white/10 border  font-medium rounded-lg text-sm px-5 py-2.5 text-center '
                    >
                      Login as Faculty
                    </button>
                    <button
                      type='submit'
                      class='w-full text-CITLWhite bg-CITLDarkBlue hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center '
                    >
                      Login as Admin
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
