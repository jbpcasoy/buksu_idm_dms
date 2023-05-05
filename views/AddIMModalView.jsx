import { useFormik } from "formik";
import * as Yup from "yup";

const AddIMModalView = ({ isOpen, onClose, onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      serialNumber: "",
      authors: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required").max(64),
      serialNumber: Yup.string().required("Serial Number is required").max(64),
      authors: Yup.string().required("Authors is required").max(64),
    }),
    onSubmit: (values) => {
      return onSubmit(values).then((res) => {
        onClose();
      });
    },
  });

  return (
    <>
      {isOpen && (
        <div className='fixed top-0 left-0 h-full w-full flex items-center justify-center bg-gray-800 bg-opacity-75'>
          <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-lg'>
            <h2 className='text-gray-800 font-bold text-xl mb-4'>Upload IM</h2>
            <form noValidate onSubmit={formik.handleSubmit}>
              <div className='mb-4'>
                <label
                  className='block text-gray-700 font-bold'
                  htmlFor='serialNumber'
                >
                  Serial No.
                </label>
                <input
                  {...formik.getFieldProps("serialNumber")}
                  className='border border-gray-400 p-2 w-full rounded-md'
                  type='text'
                  id='serialNumber'
                />
                {formik.touched.serialNumber && formik.errors.serialNumber && (
                  <p className='text-sm text-red-600'>
                    {formik.touched.serialNumber && formik.errors.serialNumber}
                  </p>
                )}
              </div>

              <div className='mb-4'>
                <label
                  className='block text-gray-700 font-bold '
                  htmlFor='title'
                >
                  Title
                </label>
                <input
                  {...formik.getFieldProps("title")}
                  className='border border-gray-400 p-2 w-full rounded-md'
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
                  className='block text-gray-700 font-bold'
                  htmlFor='authors'
                >
                  Authors
                </label>
                <input
                  {...formik.getFieldProps("authors")}
                  className='border border-gray-400 p-2 w-full rounded-md'
                  type='text'
                  id='authors'
                />
                {formik.touched.authors && formik.errors.authors && (
                  <p className='text-sm text-red-600'>
                    {formik.touched.authors && formik.errors.authors}
                  </p>
                )}
              </div>

              <div className='flex items-center justify-end'>
                <div className='space-x-2'>
                  <button
                    className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded'
                    onClick={onClose}
                    disabled={formik.isSubmitting}
                  >
                    Cancel
                  </button>
                  <button
                    className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
                    type='submit'
                    disabled={formik.isSubmitting}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddIMModalView;
