import Layout from "@/components/layout/Layout";

export default function RequestIMReviewForm() {
  return (
    <Layout>
      <div className="pt-12">
        <div className="flex items-center border border-CITLGray-lighter  bg-CITLGray-light m-2 p-3 relative rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-12 md:w-full ">
            <h2 className="text-gray-800 font-bold text-xl ">
              Request for Instructional Material Review Form
            </h2>
            <p className="mb-8 text-sm">Implementation Phase</p>
            <form>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    for="name_of_author"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name of Author/Applicant
                  </label>
                  <input
                    type="text"
                    id="name_of_author"
                    className="bg-CITLGray-light border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-CITLOrange focus:border-CITLOrange block w-full p-2.5 "
                    placeholder="John Doe"
                    required
                  />
                  <p className="mt-2 text-xs text-CITLGray-main">
                    Put a comma (,) in between names
                  </p>
                </div>
                <div>
                  <label
                    for="im_title"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Title of IM
                  </label>
                  <input
                    type="text"
                    id="im_title"
                    className="bg-CITLGray-light border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-CITLOrange focus:border-CITLOrange block w-full p-2.5 "
                    placeholder="Introduction to..."
                    required
                  />
                </div>
                <div>
                  <label
                    for="im_type"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select an IM type
                  </label>
                  <select
                    id="im_type"
                    className="bg-CITLGray-light border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-CITLOrange focus:border-CITLOrange block w-full p-2.5 "
                  >
                    <option selected>Module</option>
                    <option>Course File</option>
                    <option>Worktext</option>
                    <option>Texbook</option>
                  </select>
                </div>
                <div>
                  <label
                    for="course_code"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Course Code and Course Descriptive Title for which this IM
                    will be used
                  </label>
                  <input
                    type="text"
                    id="course_code"
                    className="bg-CITLGray-light border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-CITLOrange focus:border-CITLOrange block w-full p-2.5 "
                    placeholder="IT112 Introduction to..."
                    required
                  />
                </div>
                <div>
                  <label
                    for="semesters"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select Semester this IM will be used
                  </label>
                  <select
                    id="semesters"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-CITLOrange focus:border-CITLOrange block w-full p-2.5 "
                  >
                    <option selected>Choose a semester</option>
                    <option selected>Summer</option>
                    <option>First semester only</option>
                    <option>Second Semester only</option>
                    <option>Every semester</option>
                  </select>
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    <div>
                      <label
                        for="semesters"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Do you agree to have a Student Evaluation Form included
                        in the IM?
                      </label>
                      <input
                        id="default-radio-1"
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4  text-CITLDarkBlue bg-CITLWhite border-CITLDarkBlue focus:ring-CITLDarkBlue "
                      />
                      <label
                        for="default-radio-1"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Yes
                      </label>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <input
                      checked
                      id="default-radio-2"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 text-CITLDarkBlue bg-CITLWhite border-CITLDarkBlue focus:ring-CITLDarkBlue "
                    />
                    <label
                      for="default-radio-2"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className=" flex justify-end">
                <button
                  type="submit"
                  className="text-white bg-CITLDarkBlue hover:bg-CITLDarkBlue  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
