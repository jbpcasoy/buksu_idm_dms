import WithSidebar from "@/components/WithSidebar";
import College from "@/views/College";
import Layout from "@/views/layout/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function CollegePage() {
  const [state, setState] = useState({
    // TODO fetch from database
    colleges: [
      { name: "College of Technologies" },
      { name: "College of Business Administration" },
      { name: "College of Nursing" },
      { name: "College of Arts and Sciences" },
      { name: "College of Law" },
      { name: "College of Public Administration" },
      { name: "College of Education" },
    ],
  });

  const router = useRouter();

  return (
    <Layout>
      <WithSidebar active='colleges'>
        <div>
          <div className='flex flex-wrap items-center border border-slate-300  bg-CITLWhite m-6 p-3 relative rounded-lg shadow-lg overflow-hidden'>
            <div className='px-6 py-4 md:w-10/12 sm:w-12/12'>
              <h3 className='text-lg font-semibold text-CITLDarkBlue'>
                Announcement
              </h3>
              <p className='text-gray-600 mt-2 pb-5'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
                facere natus eos amet dolor quam, sit, consequatur rerum unde
                similique provident, eaque a perspiciatis aspernatur ex odio
                sequi corrupti quae!
              </p>
              <button className='items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-CITLDarkBlue rounded-lg '>
                Read more
              </button>
            </div>

            <Image
              className='md:w-2/12 sm:w-12/12 rounded-lg object-cover relative shadow-lg'
              src='/IMAGES/DSC_6510.jpg'
              alt='Announcement Image'
            />
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
                  <span>Colleges</span>
                </button>
              </div>

              <div className='flex'>
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
                  className='w-36 py-2 pr-10 pl-4 bg-CITLGray-light border-CITLGray-lighter border text-CITLGray-main rounded-lg mr-5'
                  type='text'
                  placeholder='Search'></input>
                <button
                  title='Add IM'
                  className='flex items-center bg-CITLDarkBlue rounded-lg px-5 py-2.5 text-sm font-medium text-center text-white '
                  onClick={() => {
                    router.push("/im/new");
                  }}
                >
                  <i className="fi fi-br-plus mt-1  "></i>
                </button>
              </div>
            </div>
            <table className="min-w-full divide-y divide-CITLGray-light">
              <thead className="bg-CITLGray-light">
                <tr>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Colleges
                  </th>

                  <th
                    scope='col'
                    className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200 overflow-y-auto'>
                {state.colleges.map((college, index) => (
                  <College name={college.name} id={index} key={index} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </WithSidebar>
    </Layout>
  );
}
