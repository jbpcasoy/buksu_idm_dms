import Layout from "@/components/layout/Layout";
import frontendGetIMs from "@/services/frontend/im/frontendGetIMs";
import IM from "@/views/im/IM";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const [state, setState] = useState({
    ims: [],
  });

  const router = useRouter();

  useEffect(() => {
    let subscribe = true;

    frontendGetIMs({ page: 1, limit: 10 }).then((res) => {
      if (!subscribe) return;

      setState((prev) => ({ ...prev, ims: res.data }));
    });

    return () => {
      subscribe = false;
    };
  }, []);

  return (
    <Layout>
      <div className="">
        <div className="flex flex-wrap items-center border border-slate-300  bg-CITLWhite m-6 p-3 relative rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-4 md:w-10/12 sm:w-12/12">
            <h3 className="text-lg font-semibold text-CITLDarkBlue">
              Announcement
            </h3>
            <p className="text-gray-600 mt-2 pb-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
              facere natus eos amet dolor quam, sit, consequatur rerum unde
              similique provident, eaque a perspiciatis aspernatur ex odio sequi
              corrupti quae!
            </p>
            <button className="items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-CITLDarkBlue rounded-lg ">
              Read more
            </button>
          </div>

          <img
            className="md:w-2/12 sm:w-12/12 rounded-lg object-cover relative shadow-lg"
            src="/IMAGES/DSC_6510.jpg"
            alt="Announcement Image"
          />
        </div>
      </div>
      <div className="flex flex-wrap items-center border border-CITLGray-lighter bg-CITLWhite m-6 mt-0 relative rounded-lg shadow-lg overflow-hidden">
        <div className="flex items-center bg-CITLGray-light justify-between py-3 px-3 w-full">
          <div className="flex space-between">
            <button
              type="button"
              className="inline-flex items-center px-2 py-2.5 text-sm font-medium text-center text-CITLDarkBlue border-b-2 border-CITLOrange rounded-none"
            >
              <span className="inline-flex items-center justify-center w-4 h-4 mr-1 text-xs font-semibold text-CITLWhite bg-CITLOrange rounded-full ">
                2
              </span>
              <span>My IM&apos;s</span>
            </button>
            <button
              type="button"
              className="inline-flex items-center px-2 py-2.5 text-sm font-medium text-center text-CITLDarkBlue border-CITLOrange rounded-none"
            >
              <span className="inline-flex items-center justify-center w-4 h-4 mr-1 text-xs font-semibold text-CITLWhite bg-CITLOrange rounded-full">
                2
              </span>
              To Revise
            </button>
            <button
              type="button"
              className="inline-flex items-center px-2 py-2.5 text-sm font-medium text-center text-CITLDarkBlue  border-CITLOrange rounded-none"
            >
              <span className="inline-flex items-center justify-center w-4 h-4 mr-1 text-xs font-semibold text-CITLWhite bg-CITLOrange rounded-full">
                2
              </span>
              To Review
            </button>
            <button
              type="button"
              className="inline-flex items-center px-2 py-2.5 text-sm font-medium text-center text-CITLDarkBlue border-CITLOrange rounded-none"
            >
              <span className="inline-flex items-center justify-center w-4 h-4 mr-1 text-xs font-semibold text-CITLWhite bg-CITLOrange rounded-full">
                2
              </span>
              Reviewed
            </button>
            <button
              type="button"
              className="inline-flex items-center px-2 py-2.5 text-sm font-medium text-center text-CITLDarkBlue border-CITLOrange rounded-none"
            >
              <span className="inline-flex items-center justify-center w-4 h-4 mr-1 text-xs font-semibold text-CITLWhite bg-CITLOrange rounded-full">
                2
              </span>
              Department IM&apos;s
            </button>
          </div>

          <div className="flex">
            <select
              id="default"
              className="bg-CITLGray-light border border-CITLGray-lighter text-CITLGray-main text-sm rounded-lg block p-2.5 mr-1"
            >
              <option selected>Filter</option>
              <option>Serial No.</option>
              <option>Title</option>
              <option>Status</option>
              <option>Owner</option>
              <option>Created At</option>
              <option>Updated At</option>
            </select>

            <input
              className="w-36 py-2 pr-10 pl-4 bg-CITLGray-light border-CITLGray-lighter border text-CITLGray-main rounded-lg mr-5"
              type="text"
              placeholder="Search"
            ></input>
            <button
              title="Add IM"
              className="flex items-center bg-CITLDarkBlue rounded-lg px-4 py-2.5 text-sm font-medium text-center text-white "
              onClick={() => {
                router.push("/im/new");
              }}
            >
              <i className="fi fi-br-plus mt-1  "></i>
            </button>
          </div>
        </div>
        <table className="min-w-full divide-y divide-CITLGray-light mb-2">
          <thead className="bg-CITLGray-light">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Serial No.
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Title
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Owner
              </th>

              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Created At
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Updated At
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-gray-200 overflow-y-auto">
            {state.ims.map((im, index) => {
              return (
                <IM
                  // bottomBorder={index < state.ims.length - 1}
                  bottomBorder={true}
                  createdAt={im.createdAt}
                  originalFileName={im.originalFileName}
                  fileName={im.fileName}
                  id={im.id}
                  owner={im.owner}
                  serialNumber={im.serialNumber}
                  status={im.status}
                  title={im.title}
                  updatedAt={im.updatedAt}
                  onView={() => router.push(`/im/${im.id}`)}
                  key={im.id}
                />
              );
            })}
          </tbody>
        </table>

        <div className="flex flex-row items-center justify-end px-6 py-3 w-full">
          <span className="text-sm text-gray-700 dark:text-gray-400 ">
            Showing{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              1
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              10
            </span>{" "}
            Entries
          </span>
          <div className="inline-flex xs:mt-0 ml-2">
            <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <svg
                aria-hidden="true"
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Prev
            </button>
            <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              Next
              <svg
                aria-hidden="true"
                className="w-5 h-5 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
