import Layout from "@/components/layout/Layout";
import frontendCreateActiveFile from "@/services/frontend/active_file/frontendCreateActiveFile";
import frontendCreateFile from "@/services/frontend/file/frontendCreateFile";
import frontendCreateIM from "@/services/frontend/im/frontendCreateIM";
import uploadIMFile from "@/services/frontend/im/upload/uploadIMFile";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as Yup from "yup";

export default function CreateIM() {
  const [file, setFile] = useState();
  const [filePreviewUrl, setFilePreviewUrl] = useState();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      serialNumber: "",
      title: "",
      // TODO add authors
    },
    validationSchema: Yup.object({
      serialNumber: Yup.string().required(),
      title: Yup.string().required(),
    }),
    onSubmit: (values) => {
      const { title, serialNumber } = values;

      return frontendCreateIM({
        title,
        serialNumber,
      }).then((im) => {
        return uploadIMFile(file).then((res) => {
          return frontendCreateFile({
            iMId: im.id,
            originalFileName: file.name,
            fileName: res.filename,
            googleDocsUrl: "https://docs.google.com/test-url",
          }).then((createdFile) => {
            return frontendCreateActiveFile({
              iMId: im.id,
              fileId: createdFile.id,
            }).then((res) => {
              router.push(`/im/${im.id}`);
            });
          });
        });
      });
    },
  });

  useEffect(() => {
    if (!file) {
      setFilePreviewUrl(null);
      return;
    }
    console.log({ file });
    const url = URL.createObjectURL(file);
    setFilePreviewUrl(url);
  }, [file]);

  useEffect(() => {
    console.log({ filePreviewUrl });
  }, [filePreviewUrl]);

  return (
    <Layout>
      <div className="flex items-center border border-CITLGray-lighter  bg-CITLWhite m-2 mt-5 p-3 relative rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-4 md:w-full ">
          <h2 className="text-CITLDarkBlue font-bold text-xl ">Create IM</h2>

          <form noValidate onSubmit={formik.handleSubmit}>
            <div className="grid gap-6 mb-6 md:grid-cols-2 mt-8">
              {/* <div>
                <label
                  for="serialNo"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Serial No.
                </label>
                <input
                  type="text"
                  id="serialNo"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                  {...formik.getFieldProps("serialNumber")}
                />
              </div>
              <div>
                <label
                  for="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                  {...formik.getFieldProps("title")}
                />
              </div> */}
            </div>
            <div>
            <label
                  for="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                  {...formik.getFieldProps("title")}
                />
              <label
                for="company"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Authors
              </label>
              <input
                type="text"
                id="authors"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>

            {/* {filePreviewUrl && (
                <>
                  <button
                    type='button'
                    className='text-white bg-CITLDarkBlue  hover:bg-CITLOrange font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center '
                    onClick={() => {
                      setFile(null);
                    }}>
                    Replace File
                  </button>
                  <iframe src={filePreviewUrl} className='w-full h-screen' />
                </>
              )} */}

            {!filePreviewUrl && (
              <div className="flex items-center justify-center w-full mt-6 mb-6">
                <label
                  for="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      className="w-10 h-10 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      DOCS or PDF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    multiple={false}
                    className="hidden"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </label>
              </div>
            )}
            <div className="text-right">
              {filePreviewUrl && (
                <>
                  <iframe
                    src={filePreviewUrl}
                    className="w-full h-screen mt-6 mb-6"
                  />
                  <button
                    type="button"
                    className="mr-4 text-white  bg-CITLOrange font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                    onClick={() => {
                      setFile(null);
                    }}
                  >
                    Replace File
                  </button>
                </>
              )}
              <button
                type="submit"
                className="text-white bg-CITLDarkBlue font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
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
