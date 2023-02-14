import frontendCreateIM from "@/services/frontend/im/frontendCreateIM";
import frontendGetIMs from "@/services/frontend/im/frontendGetIMs";
import uploadIMFile from "@/services/frontend/im/upload/uploadIMFile";
import AddIMModelView from "@/views/AddIMModalView";
import IM from "@/views/im/IM";
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
    <div>
      <div class="flex flex-wrap items-center border dark:border-slate-300  bg-white m-6 p-3 relative rounded-lg shadow-lg overflow-hidden">
        <div class="px-6 py-4 md:w-10/12 sm:w-12/12">
          <h3 class="text-lg font-semibold text-gray-800">
            Announcement Title
          </h3>
          <p class="text-gray-600 mt-2 pb-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
            facere natus eos amet dolor quam, sit, consequatur rerum unde
            similique provident, eaque a perspiciatis aspernatur ex odio sequi
            corrupti quae!
          </p>
          <button className="bg-gray-800 rounded p-1 text-white">
            Read more
          </button>
        </div>

        <img
          className="md:w-2/12 sm:w-12/12 rounded-lg object-cover relative shadow-lg"
          src="/IMAGES/DSC_6510.jpg"
          alt="Announcement Image"
        ></img>
      </div>

      <div className="bg-gray-800 border dark:border-slate-300 rounded-lg shadow-lg  m-6 relative rounded-xl overflow-auto">
        <header class="flex items-center justify-between p-3 bg-gray-800 ">
          <h1 className="text-white font-semibold">My IM's</h1>
          {/* <input type="checkbox" className=" checked:bg-blue-500 h-4 w-4 " /> */}

          <button
            className="flex items-center text-white "
            // className=" hover:bg-orange-400 text-white font-medium py-2 px-4 rounded-lg"
            onClick={() => {
              setState((prev) => {
                return { ...prev, addModalOpen: true };
              });
            }}
          >
            <i
              className="fi fi-br-square-plus text-lg
            "
            ></i>
          </button>
        </header>
        <table className="w-full border-collapse table-auto  text-sm">
          <thead>
            <tr className=" text-left">
              {/* <th className="bg-white border-b dark:border-slate-600 font-medium   text-left">
                  Check
                </th> */}
              {/* <th className="bg-white border-b dark:border-slate-600 font-medium  text-left ">
                  IDs
                </th> */}
              <th className="bg-white border-b dark:border-slate-600 font-medium text-base  text-left p-3">
                Serial Number
              </th>
              <th className="bg-white border-b dark:border-slate-600 font-medium text-base  text-left">
                Title
              </th>
              <th className="bg-white border-b dark:border-slate-600 font-medium  text-base text-left">
                Status
              </th>
              <th className="bg-white border-b dark:border-slate-600 font-medium  text-base text-left">
                Owner
              </th>
              <th className="bg-white border-b dark:border-slate-600 font-medium text-base  text-left">
                File Name
              </th>
              {/* <th className="bg-white border-b dark:border-slate-600 font-medium   text-left">
                  Saved File Name
                </th> */}
              <th className="bg-white border-b dark:border-slate-600 font-medium   text-left">
                Created At
              </th>
              <th className="bg-white border-b dark:border-slate-600 font-medium   text-left">
                Updated At
              </th>
              <th className="bg-white border-b dark:border-slate-600 font-medium   text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {state.ims.map((im) => {
              return (
                <IM
                  createdAt={im.createdAt}
                  originalFileName={im.originalFileName}
                  fileName={im.fileName}
                  id={im.id}
                  owner={im.owner}
                  serialNumber={im.serialNumber}
                  status={im.status}
                  title={im.title}
                  updatedAt={im.updatedAt}
                  onView={() => router.push(`/api/im/download/${im.fileName}`)}
                  key={im.id}
                />
              );
            })}
          </tbody>
        </table>
        <footer>
          <p className="text-white px-3 text-right">Pagination ni siya</p>
        </footer>
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
            const { file, title, serialNumber } = values;
            const originalFileName = file.name;
            uploadIMFile(file).then((res) => {
              const fileName = res.filename;
              return frontendCreateIM({
                fileName,
                serialNumber,
                title,
                originalFileName,
              });
            });
          }}
        />
      )}
    </div>
  );
}
