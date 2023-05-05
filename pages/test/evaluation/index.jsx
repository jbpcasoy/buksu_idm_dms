import Layout from "@/components/layout/Layout";
import { useFormik } from "formik";
import Link from "next/link";
import * as Yup from "yup";

const IMEvaluationForm = ({ isOpen, onClose, onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      imType: "",
      authors: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required").max(64),
      imType: Yup.string().required("IM Type is required").max(64),
      authors: Yup.string().required("Authors is required").max(64),
    }),
    onSubmit: (values) => {
      return onSubmit(values).then((res) => {
        onClose();
      });
    },
  });
  return (
    <Layout>
      <div className='pt-12'>
        <div className='flex items-center border border-CITLGray-lighter bg-CITLGray-light m-2 p-3 relative rounded-lg shadow-lg overflow-hidden'>
          <div className='p-5 w-full'>
            <div className='mx-4 p-4'>
              <div className='flex items-center'>
                <div className='flex items-center text-CITLOrange relative'>
                  <div className='rounded-full transition duration-500 ease-in-out h-4 w-4 border-2 border-CITLOrange bg-CITLOrange text-left'>
                    <div className='absolute top-0 mt-6 w-32 text-xs font-medium uppercase text-CITLOrange'>
                      basic info
                    </div>
                  </div>
                </div>
                <div className='flex-auto border-t-2 transition duration-500 ease-in-out border-CITLOrange'></div>
                <div className='flex items-center text-white relative'>
                  <div className='rounded-full transition duration-500 ease-in-out h-4 w-4 border-2 border-CITLGray-lighter'>
                    <div className='absolute top-0 text-left mt-6 w-32 text-xs font-medium uppercase text-CITLGray-lighter'>
                      instructions
                    </div>
                  </div>
                </div>

                <div className='flex-auto border-t-2 transition duration-500 ease-in-out border-CITLGray-lighter'></div>
                <div className='flex items-center text-CITLOrange relative'>
                  <div className='rounded-full text-left transition duration-500 ease-in-out h-4 w-4 border-2 border-CITLGray-lighter'>
                    <div className='absolute top-0  mt-6 w-32 text-xs font-medium uppercase text-CITLGray-lighter'>
                      The title
                    </div>
                  </div>
                </div>
                <div className='flex-auto border-t-2 transition duration-500 ease-in-out border-CITLGray-lighter'></div>
                <div className='flex items-center text-CITLOrange relative'>
                  <div className='rounded-full text-left transition duration-500 ease-in-out h-4 w-4 border-2 border-CITLGray-lighter'>
                    <div className='absolute top-0  mt-6 w-32 text-xs font-medium uppercase text-CITLGray-lighter'>
                      The Preface
                    </div>
                  </div>
                </div>

                <div className='flex-auto border-t-2 transition duration-500 ease-in-out border-CITLGray-lighter'></div>
                <div className='flex items-center text-CITLGray-lighter relative'>
                  <div className='rounded-full text-left transition duration-500 ease-in-out h-4 w-4 border-2 border-CITLGray-lighter'>
                    <div className='absolute top-0  mt-6 w-32 text-xs font-medium uppercase text-CITLGray-lighter'>
                      The chapters
                    </div>
                  </div>
                </div>
                <div className='flex-auto border-t-2 transition duration-500 ease-in-out border-CITLGray-lighter'></div>
                <div className='flex items-center text-CITLGray-lighter relative'>
                  <div className='rounded-full text-left transition duration-500 ease-in-out h-4 w-4 border-2 border-CITLGray-lighter'>
                    <div className='absolute top-0  mt-6 w-32 text-xs font-medium uppercase text-CITLGray-lighter'>
                      The learning outcomes
                    </div>
                  </div>
                </div>
                <div className='flex-auto border-t-2 transition duration-500 ease-in-out border-CITLGray-lighter'></div>
                <div className='flex items-center text-CITLGray-lighter relative'>
                  <div className='rounded-full text-left transition duration-500 ease-in-out h-4 w-4 border-2 border-CITLGray-lighter'>
                    <div className='absolute top-0  mt-6 w-32 text-xs font-medium uppercase text-CITLGray-lighter'>
                      The Concepts
                    </div>
                  </div>
                </div>
                <div className='flex-auto border-t-2 transition duration-500 ease-in-out border-CITLGray-lighter'></div>
                <div className='flex items-center text-CITLGray-lighter relative'>
                  <div className='rounded-full text-left transition duration-500 ease-in-out h-4 w-4 border-2 border-CITLGray-lighter'>
                    <div className='absolute top-0  mt-6 w-32 text-xs font-medium uppercase text-CITLGray-lighter'>
                      The Examples
                    </div>
                  </div>
                </div>
                <div className='flex-auto border-t-2 transition duration-500 ease-in-out border-CITLGray-lighter'></div>
                <div className='flex items-center text-CITLGray-lighter relative'>
                  <div className='rounded-full text-left transition duration-500 ease-in-out h-4 w-4 border-2 border-CITLGray-lighter'>
                    <div className='absolute top-0  mt-6 w-32 text-xs font-medium uppercase text-CITLGray-lighter'>
                      The Activities
                    </div>
                  </div>
                </div>
                <div className='flex-auto border-t-2 transition duration-500 ease-in-out border-CITLGray-lighter'></div>
                <div className='flex items-center text-CITLGray-lighter relative'>
                  <div className='rounded-full text-left transition duration-500 ease-in-out h-4 w-4 border-2 border-CITLGray-lighter'>
                    <div className='absolute top-0  mt-6 w-32 text-xs font-medium uppercase text-CITLGray-lighter'>
                      The Rubrics
                    </div>
                  </div>
                </div>
                <div className='flex-auto border-t-2 transition duration-500 ease-in-out border-CITLGray-lighter'></div>
              </div>
            </div>

            <div className='px-6 pt-16 md:w-full '>
              <h2 className='text-CITLDarkBlue font-bold text-2xl '>
                Instructional Material Evaluation Form
              </h2>
              <p className='mb-8 text-sm'>IMERC</p>

              <div className='grid gap-6 mb-6 md:grid-cols-2'>
                <div className='mb-4'>
                  <label
                    className='block mb-1 text-sm font-semibold text-CITLDarkBlue '
                    htmlFor='title'
                  >
                    Title
                  </label>
                  <input
                    {...formik.getFieldProps("title")}
                    className='border border-gray-400 bg-CITLGray-light p-2 w-full rounded-md'
                    type='text'
                    id='title'
                  />
                  {formik.touched.title && formik.errors.title && (
                    <p className='text-sm text-red-600'>
                      {formik.touched.title && formik.errors.title}
                    </p>
                  )}
                </div>

                <div className='mb-4'>
                  <label
                    className='block mb-1 text-sm font-semibold text-CITLDarkBlue '
                    htmlFor='authors'
                  >
                    Author/s
                  </label>
                  <input
                    {...formik.getFieldProps("authors")}
                    className='border border-gray-400 bg-CITLGray-light p-2 w-full rounded-md'
                    type='text'
                    id='authors'
                    required
                  />
                  {formik.touched.authors && formik.errors.authors && (
                    <p className='text-sm text-red-600'>
                      {formik.touched.authors && formik.errors.authors}
                    </p>
                  )}
                </div>

                <div className='mb-4'>
                  <label
                    for='im_type'
                    className='block mb-1 text-sm font-semibold text-gray-900 dark:text-white'
                  >
                    Select an IM type
                  </label>
                  <select
                    id='im_type'
                    className='border border-gray-400 bg-CITLGray-light p-2 w-full rounded-md'
                  >
                    <option selected>Module</option>
                    <option>Course File</option>
                    <option>Worktext</option>
                    <option>Texbook</option>
                  </select>
                </div>
                <div className='mb-4'>
                  <label
                    for='im_type'
                    className='block mb-1 text-sm font-semibold text-gray-900 dark:text-white'
                  >
                    Select evaluator
                  </label>
                  <select
                    id='im_type'
                    className='border border-gray-400 bg-CITLGray-light p-2 w-full rounded-md'
                  >
                    <option selected>Content Specialist</option>
                    <option>Content Editor</option>
                    <option>IDD Specialist</option>
                  </select>
                </div>
              </div>
              <div className='flex p-2 mt-4'>
                <div className='flex-auto flex flex-row-reverse'>
                  <Link
                    href='/evaluation/instructions'
                    className='text-base  ml-2 hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer shadow-xl hover:bg-CITLOrange bg-CITLDarkBlue text-CITLWhite  '
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
};
export default IMEvaluationForm;
