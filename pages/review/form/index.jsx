import WithSidebar from "@/components/WithSidebar";
import Section from "@/views/forms/Section";
import Layout from "@/views/layout/Layout";
import { useFormik } from "formik";
import * as Yup from "yup";

const ReviewForm = ({ isOpen, onClose, onSubmit }) => {
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
      <WithSidebar>
        <div className="flex items-center border border-CITLGray-lighter  bg-CITLWhite m-6 p-3 relative rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-4 md:w-full ">
            <h2 className="text-gray-800 font-bold text-xl ">
              Instructional Material Review Form
            </h2>
            <p className="mb-4">(Implementation Phase)</p>
            <form noValidate onSubmit={formik.handleSubmit}>
              <div className="grid gap-6 mb-6 md:grid-cols-3">
                <div className="mb-4">
                  <label
                    className="block mb-1 text-sm font-semibold text-CITLDarkBlue "
                    htmlFor="serialNumber"
                  >
                    Title
                  </label>
                  <input
                    {...formik.getFieldProps("title")}
                    className="border border-gray-400 p-2 w-full rounded-md"
                    type="text"
                    id="title"
                  />
                  {formik.touched.title && formik.errors.title && (
                    <p className="text-sm text-red-600">
                      {formik.touched.title && formik.errors.title}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    className="block mb-1 text-sm font-semibold text-CITLDarkBlue "
                    htmlFor="authors"
                  >
                    Author/s
                  </label>
                  <input
                    {...formik.getFieldProps("authors")}
                    className="border border-gray-400 p-2 w-full rounded-md"
                    type="text"
                    id="authors"
                  />
                  {formik.touched.authors && formik.errors.authors && (
                    <p className="text-sm text-red-600">
                      {formik.touched.authors && formik.errors.authors}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    className="block mb-1 text-sm font-semibold text-CITLDarkBlue"
                    htmlFor="imType"
                  >
                    IM Type
                  </label>
                  <input
                    {...formik.getFieldProps("imType")}
                    className="border border-gray-400 p-2 w-full rounded-md"
                    type="text"
                    id="imType"
                  />
                  {formik.touched.imType && formik.errors.imType && (
                    <p className="text-sm text-red-600">
                      {formik.touched.imType && formik.errors.imType}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <div className="border border-CITLOrange rounded-lg px-3 py-2">
                  <h3 className=" font-semibold  text-CITLGray-main">
                    To the reviewers:
                  </h3>
                  <p className="text-xs font-normal text-CITLGray-main">
                    Check the column corresponding to your rating for each item.
                    Be guided by the following desciptions.
                  </p>

                  {/* TODO: Allign all items to center  */}

                  <ul className="items-center w-full text-sm font-medium    rounded-lg sm:flex  dark:text-CITLDarkBlue mt-2">
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
                          className="w-full py-3 ml-2 text-sm font-medium text-CITLGray-lighter "
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
                          className="w-full py-3 ml-2 text-sm font-medium text-CITLGray-lighter"
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
                          className="w-full py-3 ml-2 text-sm font-medium text-CITLGray-lighter"
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
                          className="w-full py-3 ml-2 text-sm font-medium text-CITLGray-lighter"
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
                          className="w-full py-3 ml-2 text-sm font-medium text-CITLGray-lighter"
                        >
                          Not at All
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>

                <Section
                  title=" The Title"
                  questions={[
                    "The title is definite.",
                    "The title is relevant to the contents of the instructional material.",
                  ]}
                />

                <Section
                  title=" The Preface"
                  questions={[
                    "The preface is written by the author/s himself/herself/themselves.",
                    "It includes reasons for creating the material.",
                    "It states the importance to the users.",
                    "It introduces what the material is about.",
                  ]}
                />

                <Section
                  title=" The Introduction in Every Chapter/Unit"
                  questions={[
                    "The introduction in every chapter/unit gives the overview of the coverage.",
                  ]}
                />

                <Section
                  title=" The Learning Outcomes"
                  questions={[
                    "The content, activities, and assessment are aligned with the LOs.",
                    "The Learning outcomes (COs and SLOs) are addressed ain the instructional material.",
                    "The Learning outcomes are appropriate for the topics covered.",
                  ]}
                />

                <Section
                  title=" The Discussion/Presentation of the Concepts"
                  questions={[
                    "The concepts are explicitly discussed.",
                    "All terms are understandable to the learners.",
                    "The content is free from gender-bias.",
                  ]}
                />

                <Section
                  title=" The Examples for the Application of the Concepts"
                  questions={[
                    "Examples are provided to illustrate the concepts discussed.",
                    "The examples are consistent with the concepts discussed.",
                    "They relate to real-world situations.",
                    "They motivate students to participate in learning process.",
                    "They illustrate attainment of learning outcomes.",
                  ]}
                />

                <Section
                  title=" The Exercises/Activities"
                  questions={[
                    "The Exercises/Activities are appropriate for demonstrating the learned concepts.",
                    "There are provisions that encourage students to work collaboratively.",
                    "The exercises/activities develop creativity, critical thinking, and problem-solving skills of the students.",
                    "They encourage students to communicate effectively.",
                    "They are prepared within the capability of the students.",
                  ]}
                />
                <Section
                  title="  The Rubrics (if applicable)"
                  questions={[
                    "The rubrics are appropriate for the assessment.",
                    "The rubrics describe the criteria through which the learners' outputs are rated. ",
                    "The rubrics show the levels of achievements of the quality of the assessment outputs.",
                    "They encourage students to communicate effectively.",
                    "They are prepared within the capability of the students.",
                  ]}
                />
              </div>

              <label
                className="block mb-1 text-sm font-semibold text-CITLDarkBlue pt-5
                    "
              >
                Reviewed by
              </label>
              <div className="grid gap-6 mb-6 md:grid-cols-3 mt-5">
                <div className="mb-4">
                  <label
                    className="block mb-1 text-sm font-semibold text-CITLDarkBlue "
                    htmlFor="imdProgramCoordinator"
                  >
                    IMD Program Coordinator
                  </label>
                  <input
                    disabled
                    {...formik.getFieldProps("imdProgramCoordinator")}
                    className="border border-gray-400 p-2 w-full rounded-md"
                    type="text"
                    id="imdProgramCoordinator"
                    placeholder="JUAN DE LA CRUZ"
                  />
                  {formik.touched.imdProgramCoordinator &&
                    formik.errors.imdProgramCoordinator && (
                      <p className="text-sm text-red-600">
                        {formik.touched.imdProgramCoordinator &&
                          formik.errors.imdProgramCoordinator}
                      </p>
                    )}
                </div>

                <div className="mb-4">
                  <label
                    className="block mb-1 text-sm font-semibold text-CITLDarkBlue "
                    htmlFor="seniorFaculty"
                  >
                    Senior Faculty
                  </label>
                  <input
                    disabled
                    {...formik.getFieldProps("seniorFaculty")}
                    className="border border-gray-400 p-2 w-full rounded-md"
                    type="text"
                    id="seniorFaculty"
                    placeholder="JUAN DE LA CRUZ"
                  />
                  {formik.touched.seniorFaculty &&
                    formik.errors.seniorFaculty && (
                      <p className="text-sm text-red-600">
                        {formik.touched.seniorFaculty &&
                          formik.errors.seniorFaculty}
                      </p>
                    )}
                </div>

                <div className="mb-4">
                  <label
                    className="block mb-1 text-sm font-semibold text-CITLDarkBlue"
                    htmlFor="programChair"
                  >
                    Program Chair
                  </label>
                  <input
                    disabled
                    {...formik.getFieldProps("imType")}
                    className="border border-gray-400 p-2 w-full rounded-md"
                    type="text"
                    id="programChair"
                    placeholder="JUAN DE LA CRUZ"
                  />
                  {formik.touched.programChair &&
                    formik.errors.programChair && (
                      <p className="text-sm text-red-600">
                        {formik.touched.programChair &&
                          formik.errors.programChair}
                      </p>
                    )}
                </div>
              </div>
              <div className="flex items-center justify-end pt-5">
                <div className="space-x-2">
                  <button
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
                    onClick={onClose}
                    disabled={formik.isSubmitting}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    type="submit"
                    disabled={formik.isSubmitting}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </WithSidebar>
    </Layout>
  );
};
export default ReviewForm;
