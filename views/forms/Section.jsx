import Question from "./Question";

export default function Section({ title, questions }) {
  return (
    <div className=" mt-5 border border-CITLOrange rounded-lg py-2 px-3">
      <label
        for="helper-radio-4"
        className="font-medium text-gray-900 dark:text-gray-300"
      >
        <h3 className=" text-center font-semibold text-lg text-CITLGray-main py-3">{title}</h3>
      </label>

      {questions.map((question) => (
        <>
          <Question question={question} />

          <ul className="items-center w-full text-sm font-medium  bg-CITLGray-lighter border  rounded-lg sm:flex ">
            <li className="w-full border-b border-CITLGray- sm:border-b-0 sm:border-r ">
              <div className="flex items-center pl-3">
                <input
                  id="horizontal-list-radio-license"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="w-4 h-4 text-CITLDarkBlue bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue"
                />
                <label
                  for="horizontal-list-radio-license"
                  className="w-full py-3 ml-2 text-sm font-medium text-CITLGray-main "
                >
                  Very Much{" "}
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
              <div className="flex items-center pl-3">
                <input
                  id="horizontal-list-radio-id"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="w-4 h-4 text-CITLDarkBlue bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue"
                />
                <label
                  for="horizontal-list-radio-id"
                  className="w-full py-3 ml-2 text-sm font-medium text-CITLGray-main"
                >
                  Much
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
              <div className="flex items-center pl-3">
                <input
                  id="horizontal-list-radio-millitary"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="w-4 h-4 text-CITLDarkBlue bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue"
                />
                <label
                  for="horizontal-list-radio-millitary"
                  className="w-full py-3 ml-2 text-sm font-medium text-CITLGray-main"
                >
                  Just Enough
                </label>
              </div>
            </li>
            <li className="w-full  sm:border-r">
              <div className="flex items-center pl-3">
                <input
                  id="horizontal-list-radio-passport"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="w-4 h-4 text-CITLDarkBlue bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue"
                />
                <label
                  for="horizontal-list-radio-passport"
                  className="w-full py-3 ml-2 text-sm font-medium text-CITLGray-main"
                >
                  Not Much
                </label>
              </div>
            </li>
            <li className="w-full ">
              <div className="flex items-center pl-3">
                <input
                  id="horizontal-list-radio-passport"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="w-4 h-4 text-CITLDarkBlue bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue"
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
        </>
      ))}
    </div>
  );
}
