import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["IM Drafts", "To be revised", "Endorsed", "Under review"],
  datasets: [
    {
      label: "# of IMs",
      data: [12, 19, 3, 5],
      backgroundColor: [
        "#008FFB", //IM Drafts
        "#00E396", //To be revised
        "#FEB019", //Endorsed
        "#775DD0", //Under review
      ],
      borderColor: ["#008FFB", "#00E396", "#FEB019", "#775DD0"],
      borderWidth: 1,
    },
  ],
};

const Chart = () => {
  return (
    <div className='bg-CITLGray-light m-2 px-2.5 p-2 rounded-lg border border-CITLGray-lighter h-full'>
      <div className='flex justify-between w-full'>
        <h3 className='text-lg font-semibold mt-2'>Number of IM's</h3>
        <select
          id='type'
          className='bg-CITLDarkBlue text-CITLWhite text-sm rounded-md w-32 focus:outline-none focus:ring-0 focus:border-CITLDarkBlue block p-2.5'
        >
          <option value='MODULE' selected>
            Filter
          </option>
          <option value='CPA'>IM Drafts</option>
          <option value='WORKTEXT'>To be revised</option>
          <option value='TEXTBOOK'>Endorsed</option>
          <option value='TEXTBOOK'>Under review</option>
        </select>
      </div>
      <Doughnut data={data} />
    </div>
  );
};

export default Chart;
