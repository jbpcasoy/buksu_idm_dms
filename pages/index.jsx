import WithSidebar from "@/components/WithSidebar";
import frontendCreateIM from "@/services/frontend/im/frontendCreateIM";
import frontendGetIMs from "@/services/frontend/im/frontendGetIMs";
import AddIMModelView from "@/views/AddIMModalView";
import IM from "@/views/im/IM";
import Layout from "@/views/layout/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const [state, setState] = useState({
    addModalOpen: false,
    ims: [],
  });

  const router = useRouter();

  useEffect(() => {
    let subscribe = true;

    frontendGetIMs({ page: 1, limit: 10 }).then((res) => {
      if (!subscribe) return;

      setState((prev) => ({ ...prev, ims: res }));
    });

    return () => {
      subscribe = false;
    };
  }, []);

  return (
    <Layout>
      <WithSidebar active="myIMs">
        <div>
          <div className="flex flex-wrap items-center border border-CITLGray-lighter  bg-CITLWhite m-6 p-3 relative rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-4 md:w-10/12 sm:w-12/12">
              <h3 className="text-lg font-semibold text-CITLDarkBlue">
                Announcement
              </h3>
              <i className="fi fi-rr-bars sort"></i>
              <p className="text-CITLGray-main mt-2 pb-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
                facere natus eos amet dolor quam, sit, consequatur rerum unde
                similique provident, eaque a perspiciatis aspernatur ex odio
                sequi corrupti quae!
              </p>
              <button className="px-3 py-2 text-sm font-medium text-center text-white bg-CITLDarkBlue rounded-lg hover:bg-CITLOrange ">
                Read more
              </button>
            </div>

            <img
              className="md:w-2/12 sm:w-12/12 rounded-lg object-cover relative shadow-lg"
              src="/IMAGES/DSC_6510.jpg"
              alt="Announcement Image"
            ></img>
          </div>

          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border border-CITLGray-lighter relative rounded-lg">
              <header className="flex items-center justify-between p-3 bg-CITLGray-light ">
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-between bg-CITLDarkBlue pl-3 mr-2 py-2  rounded-lg">
                    <input type="checkbox" className="h-4 w-4" />
                    <button className="flex  text-CITLWhite mr-5 ml-5">
                      <i className="fi fi-rr-align-justify"></i>
                    </button>
                  </div>

                  <nav className="flex items-center justify-between flex-wrap p-2">
                    <div className="flex items-center flex-shrink-0 text-CITLDarkBlue "></div>
                    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                      <div className="inline-block bg-CITLOrange text-CITLWhite text-xs rounded-full px-2 py-1 mr-1">
                        <span>3</span>
                      </div>
                      <div className="text-sm lg:flex-grow">
                        <a
                          href="#responsive-header"
                          className="block mt-4 lg:inline-block lg:mt-0 text-CITLDarkBlue hover:text-CITLOrange font-medium mr-4"
                        >
                          My IM's
                        </a>
                        <div className="inline-block bg-CITLOrange text-CITLWhite text-xs rounded-full px-2 py-1 mr-1">
                          <span>3</span>
                        </div>
                        <a
                          href="#responsive-header"
                          className="block mt-4 lg:inline-block lg:mt-0 text-CITLDarkBlue hover:text-CITLOrange font-medium mr-4"
                        >
                          To Revise
                        </a>
                        <div className="inline-block bg-CITLOrange text-CITLWhite text-xs rounded-full px-2 py-1 mr-1">
                          <span>3</span>
                        </div>
                        <a
                          href="/review"
                          className="block mt-4 lg:inline-block lg:mt-0 text-CITLDarkBlue hover:text-CITLOrange font-medium mr-4"
                        >
                          To Review
                        </a>{" "}
                        <div className="inline-block bg-CITLOrange text-CITLWhite text-xs rounded-full px-2 py-1 mr-1">
                          <span>3</span>
                        </div>
                        <a
                          href="#responsive-header"
                          className="block mt-4 lg:inline-block lg:mt-0 text-CITLDarkBlue hover:text-CITLOrange font-medium mr-4"
                        >
                          Reviewed
                        </a>
                        <div className="inline-block bg-CITLOrange text-CITLWhite text-xs rounded-full px-2 py-1 mr-1">
                          <span>3</span>
                        </div>
                        <a
                          href="#responsive-header"
                          className="block mt-4 lg:inline-block lg:mt-0 text-CITLDarkBlue hover:text-CITLOrange font-medium"
                        >
                          Department IM's
                        </a>
                      </div>
                    </div>
                  </nav>
                </div>

                <div className="flex justify-between items-center">
                  <div className="">
                    <select className="mx-2 bg-CITLGray-light border text-CITLGray-main dark:border-CITLGray-lighter rounded-lg py-2 px-2">
                      <option>Filter</option>
                      <option>Serial No.</option>
                      <option>Title</option>
                      <option>Status</option>
                      <option>Owner</option>
                      <option>File Name</option>
                      <option>Created At</option>
                      <option>Updated At</option>
                    </select>
                  </div>
                  <div className="relative flex items-center justify-center mr-3">
                    <input
                      className="w-36 py-2 pr-10 pl-4 bg-CITLGray-light border dark:border-CITLGray-lighter text-CITLGray-main rounded-lg focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Search"
                    ></input>
                    <button className="absolute top-0 right-0 px-3 py-3">
                      <i className="fi fi-br-search"></i>
                    </button>
                  </div>

                  <button
                    className="flex items-center text-CITLDarkBlue mr-3 "
                    onClick={() => {
                      setState((prev) => {
                        return { ...prev, addModalOpen: true };
                      });
                    }}
                  >
                    <i
                      className="fi fi-br-square-plus text-xl
            "
                    ></i>
                  </button>
                </div>
              </header>
              <table class="min-w-full divide-y divide-CITLGray-light">
                <thead className="bg-CITLGray-light">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-CITLGray-main uppercase tracking-wider"
                    >
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-CITLOrange focus:ring-CITLOrange border-CITLOrange rounded"
                      ></input>
                    </th>
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
                      File Name
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
                <tbody className="bg-white divide-y divide-gray-200 overflow-y-auto">
                  {state.ims.map((im, index) => {
                    return (
                      <IM
                        bottomBorder={index < state.ims.length - 1}
                        createdAt={im.createdAt}
                        originalFileName={im.originalFileName}
                        fileName={im.fileName}
                        id={im.id}
                        owner={im.owner}
                        serialNumber={im.serialNumber}
                        status={im.status}
                        title={im.title}
                        updatedAt={im.updatedAt}
                        onView={() =>
                          router.push(`/api/im/download/${im.fileName}`)
                        }
                        key={im.id}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {state.addModalOpen && (
            <AddIMModelView
              isOpen={state.addModalOpen}
              onClose={() => {
                setState((prev) => {
                  return { ...prev, addModalOpen: false };
                });
              }}
              onSubmit={async (values) => {
                const { title, serialNumber } = values;

                return frontendCreateIM({
                  serialNumber,
                  title,
                });
              }}
            />
          )}
        </div>
      </WithSidebar>
    </Layout>
  );
}
