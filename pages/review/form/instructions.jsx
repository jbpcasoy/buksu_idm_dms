import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Instructions() {
  return (
    <Layout>
      <div className="pt-12">
        <div className="flex items-center border border-CITLGray-lighter  bg-CITLGray-light m-2 p-3 relative rounded-lg shadow-lg overflow-hidden">
          <div className="p-5 w-full">
            <div className="mx-4 p-4">
              <div className="flex items-center">
                <div className="flex items-center text-CITLOrange relative">
                  <div className="rounded-full transition duration-500 ease-in-out h-4 w-4 border-2 border-CITLOrange bg-CITLOrange text-left">
                    <div className="absolute top-0 mt-6 w-32 text-xs font-medium uppercase text-CITLOrange">
                      basic info
                    </div>
                  </div>
                </div>
                <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-CITLOrange"></div>
                <div className="flex items-center text-white relative">
                  <div className="rounded-full transition duration-500 ease-in-out h-4 w-4 border-2 bg-CITLOrange border-CITLOrange">
                    <div className="absolute top-0 text-left mt-6 w-32 text-xs font-medium uppercase text-CITLOrange">
                      instructions
                    </div>
                  </div>
                </div>

                <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-CITLOrange"></div>
                <div className="flex items-center text-CITLOrange relative">
                  <div className="rounded-full text-left transition duration-500 ease-in-out h-4 w-4 border-2 border-CITLGray-lighter">
                    <div className="absolute top-0  mt-6 w-32 text-xs font-medium uppercase text-CITLGray-lighter">
                      The title
                    </div>
                  </div>
                </div>
                <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-CITLGray-lighter"></div>
                <div className="flex items-center text-CITLGray-lighter relative">
                  <div className="rounded-full text-left transition duration-500 ease-in-out h-4 w-4 border-2 border-CITLGray-lighter">
                    <div className="absolute top-0  mt-6 w-32 text-xs font-medium uppercase text-CITLGray-lighter">
                      The Preface
                    </div>
                  </div>
                </div>
                <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-CITLGray-lighter"></div>
                <div className="flex items-center text-CITLGray-lighter relative">
                  <div className="rounded-full text-left transition duration-500 ease-in-out h-4 w-4 border-2 border-CITLGray-lighter">
                    <div className="absolute top-0  mt-6 w-32 text-xs font-medium uppercase text-CITLGray-lighter">
                      The chapters
                    </div>
                  </div>
                </div>
                <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-CITLGray-lighter"></div>
                <div className="flex items-center text-CITLGray-lighter relative">
                  <div className="rounded-full text-left transition duration-500 ease-in-out h-4 w-4 border-2 border-CITLGray-lighter">
                    <div className="absolute top-0  mt-6 w-32 text-xs font-medium uppercase text-CITLGray-lighter">
                      The learning outcomes
                    </div>
                  </div>
                </div>
                <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-CITLGray-lighter"></div>
                <div className="flex items-center text-CITLGray-lighter relative">
                  <div className="rounded-full text-left transition duration-500 ease-in-out h-4 w-4 border-2 border-CITLGray-lighter">
                    <div className="absolute top-0  mt-6 w-32 text-xs font-medium uppercase text-CITLGray-lighter">
                      The Concepts
                    </div>
                  </div>
                </div>
                <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-CITLGray-lighter"></div>
                <div className="flex items-center text-CITLGray-lighter relative">
                  <div className="rounded-full text-left transition duration-500 ease-in-out h-4 w-4 border-2 border-CITLGray-lighter">
                    <div className="absolute top-0  mt-6 w-32 text-xs font-medium uppercase text-CITLGray-lighter">
                      The Examples
                    </div>
                  </div>
                </div>
                <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-CITLGray-lighter"></div>
                <div className="flex items-center text-CITLGray-lighter relative">
                  <div className="rounded-full text-left transition duration-500 ease-in-out h-4 w-4 border-2 border-CITLGray-lighter">
                    <div className="absolute top-0  mt-6 w-32 text-xs font-medium uppercase text-CITLGray-lighter">
                      The Activities
                    </div>
                  </div>
                </div>
                <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-CITLGray-lighter"></div>
                <div className="flex items-center text-CITLGray-lighter relative">
                  <div className="rounded-full text-left transition duration-500 ease-in-out h-4 w-4 border-2 border-CITLGray-lighter">
                    <div className="absolute top-0  mt-6 w-32 text-xs font-medium uppercase text-CITLGray-lighter">
                      The Rubrics
                    </div>
                  </div>
                </div>
                <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-CITLGray-lighter"></div>
              </div>
            </div>

            <div className="px-6 pt-16 md:w-full ">
              <h2 className="text-CITLDarkBlue font-bold text-2xl ">
                Instructional Material Review Form
              </h2>
              <p className="mb-8 text-sm">Implementation Phase</p>

              <div>
                <div className="border border-CITLOrange rounded-lg px-3 py-8">
                  <h3 className=" font-semibold text-lg text-CITLGray-main">
                    To the reviewers:
                  </h3>
                  <p className="text-sm font-normal text-CITLGray-main">
                    Check the column corresponding to your rating for each item.
                  </p>
                  <p className="text-sm font-normal text-CITLGray-main">
                    Be guided by the following desciptions.
                  </p>

                  <ul className="items-center w-full text-sm font-medium   rounded-lg sm:flex  dark:text-CITLDarkBlue mt-2">
                    <li className="w-full  border-gray-200 sm:border-b-0  dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <input
                          disabled
                          id="horizontal-list-radio-license"
                          type="radio"
                          value=""
                          name="list-radio"
                          className="w-4 h-4 text-CITLDarkBlue border-CITLOrange bg-CITLOrange"
                        />
                        <label
                          for="horizontal-list-radio-license"
                          className="w-full py-3 ml-2 text-sm font-medium text-CITLGray-main "
                        >
                          Very Much{" "}
                        </label>
                      </div>
                    </li>
                    <li className="w-full  border-gray-200 sm:border-b-0  dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <input
                          disabled
                          id="horizontal-list-radio-id"
                          type="radio"
                          value=""
                          name="list-radio"
                          className="w-4 h-4 text-CITLDarkBlue border-CITLOrange bg-CITLOrange"
                        />
                        <label
                          for="horizontal-list-radio-id"
                          className="w-full py-3 ml-2 text-sm font-medium text-CITLGray-main"
                        >
                          Much
                        </label>
                      </div>
                    </li>
                    <li className="w-full  border-gray-200 sm:border-b-0 dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <input
                          disabled
                          id="horizontal-list-radio-millitary"
                          type="radio"
                          value=""
                          name="list-radio"
                          className="w-4 h-4text-CITLDarkBlue border-CITLOrange bg-CITLOrange"
                        />
                        <label
                          for="horizontal-list-radio-millitary"
                          className="w-full py-3 ml-2 text-sm font-medium text-CITLGray-main"
                        >
                          Just Enough
                        </label>
                      </div>
                    </li>
                    <li className="w-full dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <input
                          disabled
                          id="horizontal-list-radio-passport"
                          type="radio"
                          value=""
                          name="list-radio"
                          className="w-4 h-4text-CITLDarkBlue border-CITLOrange bg-CITLOrange"
                        />
                        <label
                          for="horizontal-list-radio-passport"
                          className="w-full py-3 ml-2 text-sm font-medium text-CITLGray-main"
                        >
                          Not Much
                        </label>
                      </div>
                    </li>
                    <li className="w-full dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <input
                          disabled
                          id="horizontal-list-radio-passport"
                          type="radio"
                          value=""
                          name="list-radio"
                          className="w-4 h-4 text-CITLDarkBlue border-CITLOrange bg-CITLOrange"
                        />
                        <label
                          for="horizontal-list-radio-passport"
                          className="w-full py-3 ml-2 text-sm font-medium text-CITLGray-main"
                        >
                          Not at All
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex p-2 mt-4">
                <Link
                  href="/review/form/"
                  className="text-base  flex justify-center px-4 py-2 rounded font-bold cursor-pointer shadow-xl hover:border-CITLOrange hover:text-CITLOrange bg-gray-100  text-CITLGray-main  border  border-CITLGray-main"
                >
                  Previous
                </Link>
                <div className="flex-auto flex flex-row-reverse">
                  <Link
                    href="/review/form/title1"
                    className="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer shadow-xl hover:bg-CITLOrange   bg-CITLDarkBlue  text-CITLWhite "
                  >
                    Next
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
