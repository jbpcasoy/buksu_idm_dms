import Layout from "@/components/layout/Layout";

export default function Endorsement() {
  return (
    <Layout>
      <div className='flex items-center border border-CITLGray-lighter  bg-CITLWhite m-2 p-3 relative rounded-lg shadow-lg overflow-hidden'>
        <div className='px-6 py-5 md:w-full '>
          <h2 className='text-gray-800 font-bold text-xl '>
            Endorsement of the Instructional Material
          </h2>
          <p className='mb-8 text-sm'>Implementation Phase</p>
          <form>
            <div className='grid gap-6 mb-6 md:grid-cols-2'>
              <div>
                <label
                  for='name_of_author'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Authors
                </label>
                <input
                  type='text'
                  id='name_of_author'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-CITLOrange focus:border-CITLOrange block w-full p-2.5 '
                  placeholder='John Doe'
                  required
                />
                <p className='mt-2 text-xs text-CITLGray-main'>
                  Put a comma (,) in between names
                </p>
              </div>
              <div>
                <label
                  for='im_title'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Title of IM
                </label>
                <input
                  type='text'
                  id='im_title'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-CITLOrange focus:border-CITLOrange block w-full p-2.5 '
                  placeholder='Introduction to...'
                  required
                />
              </div>
              <div>
                <label
                  for='course-code'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Course Code
                </label>
                <input
                  type='text'
                  id='course-code'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-CITLOrange focus:border-CITLOrange block w-full p-2.5 '
                  placeholder='IT112'
                  required
                />
              </div>
              <div>
                <label
                  for='semesters'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Select Semester & School Year
                </label>
                <select
                  id='semesters'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-CITLOrange focus:border-CITLOrange block w-full p-2.5 '
                >
                  <option selected>Summer</option>
                  <option>First semester only</option>
                  <option>Second Semester only</option>
                  <option>Every semester</option>
                </select>
              </div>
              <div>
                <label
                  for='im_type'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Select an IM type
                </label>
                <select
                  id='im_type'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-CITLOrange focus:border-CITLOrange block w-full p-2.5 '
                >
                  <option selected>Module</option>
                  <option>Course File</option>
                  <option>Worktext</option>
                  <option>Texbook</option>
                </select>
              </div>
              <div>
                <label
                  for='college'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Select College
                </label>
                <select
                  id='college'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-CITLOrange focus:border-CITLOrange block w-full p-2.5 '
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
                  for='department'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Select Departments
                </label>
                <select
                  id='department'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-CITLOrange focus:border-CITLOrange block w-full p-2.5 '
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
                <div className='flex items-center mb-4'>
                  <div className='flex-row'>
                    <label
                      for='semesters'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      This instructional material, having undergone review from
                      the Program IM Committee, is endorsed for:
                    </label>
                    <input
                      id='default-radio-1'
                      type='radio'
                      value=''
                      name='default-radio'
                      className='w-4 h-4  text-CITLDarkBlue bg-CITLWhite border-CITLDarkBlue focus:ring-CITLDarkBlue '
                    />
                    <label
                      for='default-radio-1'
                      className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                    >
                      Printing
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
                    for='default-radio-2'
                    className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    e-Distribution
                  </label>
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
                    for='default-radio-2'
                    className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Printing & e-Distribution
                  </label>
                </div>
              </div>
            </div>
            <div className=' flex justify-end'>
              <button
                type='submit'
                className='text-white bg-CITLDarkBlue hover:bg-transparent hover:border-CITLOrange border hover:text-CITLOrange  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
