import ToggleModal from "@/components/ToggleModal";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function ProfileFormView({ onSubmit, defaultName }) {
  const [state, setState] = useState({ name: defaultName ?? "" });
  const { data: session } = useSession({
    required: true,
  });
  return (
    <div className="pt-36">
      <div className="w-full mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-end px-4 pt-10">
          {/* <button
          id="dropdownButton"
          data-dropdown-toggle="dropdown"
          className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
          type="button"
        >
          <span className="sr-only">Open dropdown</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
          </svg>
        </button>

        <div
          id="dropdown"
          className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul className="py-2" aria-labelledby="dropdownButton">
            <li>
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Edit
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Export Data
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Delete
              </Link>
            </li>
          </ul>
        </div> */}
        </div>
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={session?.user?.image}
            alt="image"
          />
          <h5 className="mb-1 text-xl font-semibold text-gray-900 dark:text-white">
            {session?.user?.name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {session?.user?.email}
          </span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            {/* <Link
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100    "
          >
            Edit
          </Link> */}
            <ToggleModal />
            <Link
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-CITLDarkBlue rounded-lg "
            >
              Save
            </Link>
          </div>
        </div>
      </div>
    </div>
    // <form
    //   className='w-full max-w-sm'
    //   onSubmit={(e) => {
    //     e.preventDefault();
    //     onSubmit(state);
    //   }}>
    //   <div className='mb-4'>
    //     <input
    //       className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
    //       type='text'
    //       placeholder='Name'
    //       value={state.name}
    //       onChange={(e) =>
    //         setState((prev) => {
    //           return { ...prev, name: e.target.value };
    //         })
    //       }
    //     />
    //   </div>
    //   <div className='flex items-center justify-center'>
    //     <button
    //       className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
    //       type='submit'
    //       value='Save'>
    //       Save
    //     </button>
    //   </div>
    // </form>
  );
}
