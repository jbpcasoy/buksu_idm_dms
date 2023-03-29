import { Line } from "react-chartjs-2";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      align: "start",
    },
  },
  // cubicInterpolationMode: "monotone",
};

const labels = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL"];

export const data = {
  labels,
  datasets: [
    {
      label: "IM Drafts",
      data: [12, 15, 8, 10, 1, 5, 1],
      // fill: true,
      borderColor: "rgb(0, 143, 251)",
      backgroundColor: "rgb(0, 143, 251, 0.1)",
      tension: 0.4,
    },

    {
      label: "Endorsed",
      fill: true,
      //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      data: [3, 5, 10, 5, 10, 20, 15],
      borderColor: "rgb(254, 176, 25)",
      backgroundColor: "rgb(254, 176, 25, 0.1)",
      tension: 0.4,
    },
    {
      label: "To be revised",
      fill: true,
      data: [10, 2, 10, 18, 15, 16, 3],
      borderColor: "rgb(0, 227, 150)",
      backgroundColor: "rgb(0, 227, 150, 0.1)",
      tension: 0.4,
    },
    {
      label: "Under review",
      fill: true,
      data: [15, 23, 15, 22, 18, 22, 19],
      borderColor: "rgb(119, 93, 208)",
      backgroundColor: "rgb(119, 93, 208, 0.2)",
      tension: 0.4,
    },
  ],
};

export function ApprovedIMsLine() {
  return (
    <div className='bg-CITLGray-light  m-2 px-2.5  rounded-lg border border-CITLGray-lighter h-full '>
      <div className='flex justify-between w-full'>
        <div>
          <h3 className='text-lg font-semibold mt-3'>Approved IM&apos;s</h3>
          {/* <div className='border border-CITLGray-lighter px-1 py-1 m-1 rounded-md'>
            <h3 className='text-sm text-left'>
              <span className='inline-flex w-3 h-3 bg-blue-600 rounded-sm'></span>{" "}
              IM Drafts
            </h3>
          </div> */}
        </div>

        <div className='flex justify-between gap-2 p-2'>
          <select
            id='type'
            className='bg-CITLDarkBlue  text-CITLWhite text-sm rounded-md focus:outline-none focus:ring-0 focus:border-CITLDarkBlue block p-2.5'
          >
            <option value='MODULE' selected>
              Colleges
            </option>
            <option value='CPA'>CPA</option>
            <option value='WORKTEXT'>COE</option>
            <option value='TEXTBOOK'>CAS</option>
          </select>

          <button className='bg-CITLDarkBlue text-CITLWhite text-sm rounded-md focus:outline-none focus:ring-0 focus:border-CITLDarkBlue block  p-2.5 '>
            <svg
              fill='none'
              stroke='currentColor'
              className='w-5 h-5'
              strokeWidth='1.5'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5'
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <Line options={options} data={data} />
    </div>
  );
}
