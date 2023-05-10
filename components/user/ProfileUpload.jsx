import { useRef, useState } from "react";

export default function ProfileUpload({ userImage, onUploadImage }) {
  const fileInputRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <button
        className='block text-sm font-medium text-center mb-2 text-gray-900 bg-white border rounded-full relative'
        type='button'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleButtonClick}
      >
        {isHovered ? (
          <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
            <div className='bg-gray-700 opacity-50 absolute top-0 left-0 w-full h-full rounded-full'></div>
            <svg
              className='w-10 h-10 text-gray-400 z-10'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M20 8.99998V16.9999C20 18.1047 19.1047 18.9999 18 18.9999H6C4.89543 18.9999 4 18.1047 4 16.9999V8.99998H2V6.99998H22V8.99998H20ZM12 14.9999C14.7614 14.9999 17 12.7613 17 9.99998C17 7.23861 14.7614 4.99998 12 4.99998C9.23858 4.99998 7 7.23861 7 9.99998C7 12.7613 9.23858 14.9999 12 14.9999ZM12 6.99998C13.6569 6.99998 15 8.34306 15 9.99998C15 11.6568 13.6569 12.9999 12 12.9999C10.3431 12.9999 9 11.6568 9 9.99998C9 8.34306 10.3431 6.99998 12 6.99998Z'
                fill='currentColor'
              />
            </svg>
          </div>
        ) : null}
        <img
          className='w-24 h-24 rounded-full shadow-lg object-center object-cover'
          src={userImage}
          alt='image'
        />
      </button>
      <input
        ref={fileInputRef}
        type='file'
        accept='image/png'
        hidden
        onChange={onUploadImage}
      />
    </>
  );
}
