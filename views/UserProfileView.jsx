export default function UserProfileView({ profile }) {
  return (
    <div className='mt-20'>
      <div className='w-full mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <div className='flex flex-col items-center py-10'>
          <img
            className='w-24 h-24 mb-3 rounded-full shadow-lg'
            src={profile?.image}
            alt='image'
          />
          <h5 className='mb-1 text-xl font-semibold text-gray-900 dark:text-white'>
            {profile?.name}
          </h5>
          <span className='text-sm text-gray-500 dark:text-gray-400'>
            {profile?.email}
          </span>
          <span className='text-sm text-gray-500 dark:text-gray-400 border border-CITLGray-lighter px-2.5 py-1 rounded-md mt-3'>
            {profile?.ActiveFaculty?.Faculty?.department?.college?.name}
            {" | "}
            {profile?.ActiveFaculty?.Faculty?.department?.name}
          </span>
        </div>
      </div>
    </div>
  );
}
