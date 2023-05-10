export default function UserProfileView({ profile }) {
  return (
    <div className='m-2 lg:mt-20'>
      <div className='w-full mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <div className='flex flex-col items-center py-10'>
          <img
            className='w-24 h-24 mb-3 rounded-full shadow-lg object-cover object-center'
            src={profile?.image}
            alt='image'
          />
          <h5 className='mb-1 text-xl font-semibold text-gray-900 dark:text-white'>
            {profile?.name}
          </h5>
          <span className='text-sm text-gray-500 dark:text-gray-400'>
            {profile?.email}
          </span>
          <div className='grid  items-center'>
            <span
              title='College'
              className='text-sm text-gray-500 border border-CITLGray-lighter px-2.5 py-1 rounded-md mx-3 mt-2 text-center inline-flex items-center'
            >
              <svg
                fill='none'
                stroke='currentColor'
                className='w-4 h-4 mr-2 '
                strokeWidth='1.5'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z'
                ></path>
              </svg>
              {profile?.ActiveFaculty?.Faculty?.department?.college?.name}{" "}
            </span>

            <span
              title='Department'
              className='text-sm text-gray-500 border border-CITLGray-lighter px-2.5 py-1 rounded-md mx-3 mt-2 text-center inline-flex items-center'
            >
              <svg
                fill='none'
                stroke='currentColor'
                className='w-4 h-4 mr-2 '
                strokeWidth='1.5'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21'
                ></path>
              </svg>
              {profile?.ActiveFaculty?.Faculty?.department?.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
