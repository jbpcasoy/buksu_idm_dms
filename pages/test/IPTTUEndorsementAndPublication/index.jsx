import Layout from "@/components/layout/Layout";

export default function Endorsement() {
  return (
    <Layout>
      <div className='flex items-center border border-CITLGray-lighter  bg-CITLWhite m-2 p-3 relative rounded-lg shadow-lg overflow-hidden'>
        <div className='px-6 py-5 md:w-full '>
          <h2 className='text-gray-800 font-bold text-xl '>
            Endorsement of Request for Instructional Material Evaluation and
            Publication
          </h2>
          <p className='mb-8 text-sm'>for IPTTU Endorsement and Publication</p>
          <div className='border border-CITLOrange rounded-lg py-5 px-5 mb-5'>
            <form>
              <div className='grid gap-6 mb-6 md:grid-cols-2'>
                <div>
                  <label
                    htmlFor='name_of_author'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Authors
                  </label>
                  <input
                    type='text'
                    id='name_of_author'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-CITLOrange focus:border-CITLOrange block w-full p-2.5 '
                    placeholder='John Doe'
                    required
                  />
                  <p className='mt-2 text-xs text-CITLGray-main'>
                    Put a comma (,) in between names
                  </p>
                </div>
                <div>
                  <label
                    htmlFor='im_title'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Title of IM
                  </label>
                  <input
                    type='text'
                    id='im_title'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-CITLOrange focus:border-CITLOrange block w-full p-2.5 '
                    placeholder='Introduction to...'
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor='course-code'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Course Code and Course Descriptive Title for which this IM
                    will be used
                  </label>
                  <input
                    type='text'
                    id='course-code'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-CITLOrange focus:border-CITLOrange block w-full p-2.5 '
                    placeholder='IT112'
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor='semesters'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Select Semester & School Year
                  </label>
                  <select
                    id='semesters'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-CITLOrange focus:border-CITLOrange block w-full p-2.5 '
                  >
                    <option selected>Summer</option>
                    <option>First semester only</option>
                    <option>Second Semester only</option>
                    <option>Every semester</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor='im_type'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Select an IM type
                  </label>
                  <select
                    id='im_type'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-CITLOrange focus:border-CITLOrange block w-full p-2.5 '
                  >
                    <option selected>Module</option>
                    <option>Course File</option>
                    <option>Worktext</option>
                    <option>Texbook</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor='college'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Select College
                  </label>
                  <select
                    id='college'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-CITLOrange focus:border-CITLOrange block w-full p-2.5 '
                  >
                    <option selected>College of Administration</option>
                    <option>College of Arts and Sciences</option>
                    <option>College of Business</option>
                    <option>College of Education</option>
                    <option>College of Law</option>
                    <option>College of Nursing</option>
                    <option>College of Technologies</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor='department'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Select Departments
                  </label>
                  <select
                    id='department'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-CITLOrange focus:border-CITLOrange block w-full p-2.5 '
                  >
                    <option selected>College of Administration</option>
                    <option>Public Admnistration</option>
                    <option>Community Development</option>
                    <option>Development Communication</option>
                    <option>Economics</option>
                    <option>General Education</option>
                    <option>Language and Letters</option>
                    <option>Mathematics</option>
                    <option>Natural Sciences</option>
                    <option>Philosophy</option>
                    <option>Social Sciences</option>
                    <option>Sociology</option>
                    <option>Accountancy</option>
                    <option>Business Administration</option>
                    <option>Hospitality</option>
                    <option>Early Childhood Education</option>
                    <option>Elementary Education</option>
                    <option>Elementary Laboratory School</option>
                    <option>Physical Education</option>
                    <option>Secondary Laboratory School</option>
                    <option>Law</option>
                    <option>Nursing</option>
                    <option>Automotive Technology</option>
                    <option>Electronics Technology</option>
                    <option>Food Technology</option>
                    <option>Information Technology</option>
                    <option>National Service Training Program</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor='name_of_author'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    How long do you expect to use this edition?
                  </label>
                  <input
                    type='text'
                    id='name_of_author'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-CITLOrange focus:border-CITLOrange block w-full p-2.5 '
                    placeholder='No. of Semesters'
                    required
                  />
                  <p className='mt-2 text-xs text-CITLGray-main'>
                    Specify the No. of semesters
                  </p>
                </div>
                <div>
                  <div className='flex items-center mb-4'>
                    <div className='flex-row'>
                      <label
                        htmlFor='semesters'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                      >
                        Do you have permission to print any material with prior
                        copyright that us included in thus IM?
                      </label>
                      <input
                        id='default-radio-1'
                        type='radio'
                        value=''
                        name='default-radio'
                        className='w-4 h-4  text-CITLDarkBlue bg-CITLWhite border-CITLDarkBlue focus:ring-CITLDarkBlue '
                      />
                      <label
                        htmlFor='default-radio-1'
                        className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                      >
                        Yes
                      </label>
                    </div>
                  </div>
                  <div className='flex items-center mb-4'>
                    <input
                      checked
                      id='default-radio-2'
                      type='radio'
                      value=''
                      name='default-radio'
                      className='w-4 h-4 text-CITLDarkBlue bg-CITLWhite border-CITLDarkBlue focus:ring-CITLDarkBlue '
                    />
                    <label
                      htmlFor='default-radio-2'
                      className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                    >
                      No
                    </label>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='name_of_author'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Requested by:
                  </label>
                  <input
                    type='text'
                    id='name_of_author'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-CITLOrange focus:border-CITLOrange block w-full p-2.5 '
                    placeholder='Name of Requestor'
                    required
                  />
                </div>
              </div>
            </form>
          </div>

          <div className='border border-CITLOrange rounded-xl py-5 px-5 mb-5'>
            <h2 className='text-gray-800 mb-8 font-bold text-xl '>
              Program Recommendation
            </h2>
            <form>
              <div className='flex items-center mb-4'>
                <div className='flex-row'>
                  <label
                    htmlFor='semesters'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    1. Will the department/program require this IM in the
                    course/s indicated?
                  </label>
                  <input
                    id='default-radio-1'
                    type='radio'
                    value=''
                    name='default-radio'
                    className='w-4 h-4  text-CITLDarkBlue bg-CITLWhite border-CITLDarkBlue focus:ring-CITLDarkBlue '
                  />
                  <label
                    htmlFor='default-radio-1'
                    className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Yes
                  </label>
                </div>
              </div>
              <div className='flex items-center mb-4'>
                <input
                  checked
                  id='default-radio-2'
                  type='radio'
                  value=''
                  name='default-radio'
                  className='w-4 h-4 text-CITLDarkBlue bg-CITLWhite border-CITLDarkBlue focus:ring-CITLDarkBlue '
                />
                <label
                  htmlFor='default-radio-2'
                  className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  No
                </label>
              </div>

              <div>
                <div className='flex items-center mb-4'>
                  <div className='flex-row'>
                    <label
                      htmlFor='semesters'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      2. Will the department/program commit to using it for the
                      length of time indicated by the authors?
                    </label>
                    <input
                      id='default-radio-1'
                      type='radio'
                      value=''
                      name='default-radio'
                      className='w-4 h-4  text-CITLDarkBlue bg-CITLWhite border-CITLDarkBlue focus:ring-CITLDarkBlue '
                    />
                    <label
                      htmlFor='default-radio-1'
                      className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                    >
                      Yes
                    </label>
                  </div>
                </div>
                <div className='flex items-center mb-4'>
                  <input
                    checked
                    id='default-radio-2'
                    type='radio'
                    value=''
                    name='default-radio'
                    className='w-4 h-4 text-CITLDarkBlue bg-CITLWhite border-CITLDarkBlue focus:ring-CITLDarkBlue '
                  />
                  <label
                    htmlFor='default-radio-2'
                    className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    No
                  </label>
                </div>
              </div>
              <div>
                <div className='flex items-center mb-4'>
                  <div className='flex-row'>
                    <label
                      htmlFor='semesters'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      3. Will the department/program promote the use of the IM
                      by other schools?
                    </label>
                    <input
                      id='default-radio-1'
                      type='radio'
                      value=''
                      name='default-radio'
                      className='w-4 h-4  text-CITLDarkBlue bg-CITLWhite border-CITLDarkBlue focus:ring-CITLDarkBlue '
                    />
                    <label
                      htmlFor='default-radio-1'
                      className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                    >
                      Yes
                    </label>
                  </div>
                </div>
                <div className='flex items-center mb-4'>
                  <input
                    checked
                    id='default-radio-2'
                    type='radio'
                    value=''
                    name='default-radio'
                    className='w-4 h-4 text-CITLDarkBlue bg-CITLWhite border-CITLDarkBlue focus:ring-CITLDarkBlue '
                  />
                  <label
                    htmlFor='default-radio-2'
                    className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    No
                  </label>
                </div>
              </div>
            </form>
            <p className='mb-8 text-sm font-medium'>
              I am endorsing the evaluation of this IM for IPTTU endorsement for
              copyright application and publication.
            </p>

            <div className='grid gap-6 mb-6 md:grid-cols-2'>
              <div>
                <label
                  htmlFor='name_of_author'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  IMD Program Coordinator
                </label>
                <input
                  type='text'
                  id='name_of_author'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-CITLOrange focus:border-CITLOrange block w-full p-2.5 '
                  placeholder='John Doe'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='name_of_author'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Program Chair
                </label>
                <input
                  type='text'
                  id='name_of_author'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-CITLOrange focus:border-CITLOrange block w-full p-2.5 '
                  placeholder='John Doe'
                  required
                />
              </div>
            </div>
          </div>

          <div className='border border-CITLOrange rounded-xl py-5 px-5 mb-5'>
            <h2 className='text-gray-800 mb-5 font-bold text-xl '>
              College Recommendation
            </h2>
            <p className='mb-8 text-sm font-medium'>
              I am endorsing the evaluation of this IM for IPTTU endorsement for
              copyright application and publication.
            </p>
            <div className='grid gap-6 mb-6 md:grid-cols-2'>
              <div>
                <label
                  htmlFor='name_of_author'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  College Dean
                </label>
                <input
                  type='text'
                  id='name_of_author'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-CITLOrange focus:border-CITLOrange block w-full p-2.5 '
                  placeholder='John Doe'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='name_of_author'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Date
                </label>
                <input
                  type='text'
                  id='name_of_author'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-CITLOrange focus:border-CITLOrange block w-full p-2.5 '
                  placeholder='MM/DD/YYYY'
                  required
                />
              </div>
            </div>
          </div>

          <div className=' flex justify-end'>
            <button
              type='submit'
              className='text-white bg-CITLDarkBlue hover:bg-CITLOrange  font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
