export default function Empty() {
  return (
    <div
      id='toast-simple'
      className='flex justify-center items-center p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200  dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800 w-full'
      role='alert'
    >
      <svg
        className='w-5 h-5 text-blue-600 dark:text-blue-500'
        fill='currentColor'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'
        aria-hidden='true'
      >
        <path
          clipRule='evenodd'
          fillRule='evenodd'
          d='M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z'
        ></path>
      </svg>
      <div className='pl-4 text-sm font-normal'>Empty</div>
    </div>
  );
}
