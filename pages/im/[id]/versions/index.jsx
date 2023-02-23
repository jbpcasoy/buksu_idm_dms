import WithSidebar from "@/components/WithSidebar";
import Layout from "@/views/layout/Layout";
import { useRouter } from "next/router";

export default function IMVersions() {
  const router = useRouter();

  return (
    <Layout>
      <WithSidebar>
        <div className="px-6 py-4 md:w-full ">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg border">
            <div className="justify-between flex p-5 ">
              <h6 className="pt-2 text-lg font-semibold text-left text-gray-900 bg-white">
                Instructional Material Versions
              </h6>
            </div>

            <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-10 ">
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    aria-hidden="true"
                    className="w-2 h-3 text-blue-800 dark:text-blue-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m14 7v-6.54a6.977 6.977 0 0 1 2.465 1.59l3.484 3.486a6.954 6.954 0 0 1 1.591 2.464h-6.54a1 1 0 0 1 -1-1zm8 3.485v8.515a5.006 5.006 0 0 1 -5 5h-10a5.006 5.006 0 0 1 -5-5v-14a5.006 5.006 0 0 1 5-5h4.515c.163 0 .324.013.485.024v6.976a3 3 0 0 0 3 3h6.976c.011.161.024.322.024.485zm-8 8.515a1 1 0 0 0 -1-1h-5a1 1 0 0 0 0 2h5a1 1 0 0 0 1-1zm3-4a1 1 0 0 0 -1-1h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1z" />
                  </svg>
                  {/* <svg
                    aria-hidden="true"
                    className="w-3 h-3 text-blue-800 dark:text-blue-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg> */}
                </span>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  February 2022
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Instructional Material for IT
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti sint tenetur temporibus repudiandae nisi fuga nam
                  minus explicabo deleniti quaerat, voluptatem molestias animi
                  enim expedita saepe similique cum doloremque laudantium?
                </p>
                <a
                  href={`/im/${router.query.id}/versions/123`}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  View{" "}
                  <svg
                    className="w-3 h-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    aria-hidden="true"
                    className="w-2 h-3 text-blue-800 dark:text-blue-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m14 7v-6.54a6.977 6.977 0 0 1 2.465 1.59l3.484 3.486a6.954 6.954 0 0 1 1.591 2.464h-6.54a1 1 0 0 1 -1-1zm8 3.485v8.515a5.006 5.006 0 0 1 -5 5h-10a5.006 5.006 0 0 1 -5-5v-14a5.006 5.006 0 0 1 5-5h4.515c.163 0 .324.013.485.024v6.976a3 3 0 0 0 3 3h6.976c.011.161.024.322.024.485zm-8 8.515a1 1 0 0 0 -1-1h-5a1 1 0 0 0 0 2h5a1 1 0 0 0 1-1zm3-4a1 1 0 0 0 -1-1h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1z" />
                  </svg>
                </span>{" "}
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  March 2022
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Instructional Material for IT
                </h3>
                <p className=" mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam voluptate quaerat nesciunt fuga dolorum
                  reprehenderit soluta possimus cumque illum corporis,
                  distinctio, facere dicta vitae officia sed? Architecto enim
                  fugit doloribus?
                </p>
                <a
                  href={`/im/${router.query.id}/versions/123`}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  View{" "}
                  <svg
                    className="w-3 h-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="ml-6 mb-5">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    aria-hidden="true"
                    className="w-2 h-3 text-blue-800 dark:text-blue-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m14 7v-6.54a6.977 6.977 0 0 1 2.465 1.59l3.484 3.486a6.954 6.954 0 0 1 1.591 2.464h-6.54a1 1 0 0 1 -1-1zm8 3.485v8.515a5.006 5.006 0 0 1 -5 5h-10a5.006 5.006 0 0 1 -5-5v-14a5.006 5.006 0 0 1 5-5h4.515c.163 0 .324.013.485.024v6.976a3 3 0 0 0 3 3h6.976c.011.161.024.322.024.485zm-8 8.515a1 1 0 0 0 -1-1h-5a1 1 0 0 0 0 2h5a1 1 0 0 0 1-1zm3-4a1 1 0 0 0 -1-1h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1z" />
                  </svg>
                </span>{" "}
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  April 2022
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Instructional Material for IT
                </h3>
                <p className=" mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi doloribus nam, sint nulla aperiam ratione optio
                  veniam provident expedita voluptate! Quaerat ipsum eveniet
                  voluptates, quod molestias perferendis corporis ab labore.
                </p>
                <a
                  href={`/im/${router.query.id}/versions/123`}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  View{" "}
                  <svg
                    className="w-3 h-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
            </ol>

            {/* <table className="w-full text-sm text-left text-CITLGray-main ">
              <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                Instructional Material Versions
                <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                  Browse a list of Flowbite products designed to help you work
                  and play, stay organized, get answers, keep in touch, grow
                  your business, and more.
                </p>
              </caption>

              <thead className="text-xs text-CITLGray-main uppercase bg-CITLGray-light">
                <tr>
                  <th scope="col" className="px-6 py-3 ">
                    serial no.
                  </th>
                  <th scope="col" className="px-6 py-3">
                    title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Owner
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Versions
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-CITLWhite border-b ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-CITLGray-main whitespace-nowrap "
                  >
                    IM 001
                  </th>
                  <td className="px-6 py-4">Instructional Material for IT</td>
                  <td className="px-6 py-4">John Bryan</td>
                  <td className="px-6 py-4">Version 1</td>
                  <td className="px-6 py-4 text-center">
                    <div className=" text-center">
                      <a
                        href="#"
                        className=" m-5 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                      <a
                        href="#"
                        className=" font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        View
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="bg-CITLWhite border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-CITLGray-main whitespace-nowrap"
                  >
                    IM 002
                  </th>
                  <td className="px-6 py-4">Instructional Material for IT</td>
                  <td className="px-6 py-4">John Bryan</td>
                  <td className="px-6 py-4">Version 1</td>
                  <td className="px-6 py-4 text-center">
                    <div className=" text-center">
                      <a
                        href="#"
                        className=" m-5 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                      <a
                        href="#"
                        className=" font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        View
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="bg-CITLWhite border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-CITLGray-main whitespace-nowrap"
                  >
                    IM 003
                  </th>
                  <td className="px-6 py-4">Instructional Material for IT</td>
                  <td className="px-6 py-4">John Bryan</td>
                  <td className="px-6 py-4">Version 1</td>
                  <td className="px-6 py-4 text-center">
                    <div className=" text-center">
                      <a
                        href="#"
                        className=" m-5 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                      <a
                        href="#"
                        className=" font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        View
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table> */}
          </div>
        </div>
      </WithSidebar>
    </Layout>
  );
}
