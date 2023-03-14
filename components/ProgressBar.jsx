const ProgressBar = ({ value, max }) => {
  const progress = (value / max) * 100;

  return (
    <div className='px-4 mt-10'>
      <div className='relative h-1 bg-CITLGray-lighter '>
        <div
          className='absolute top-0 left-0 h-1 bg-CITLOrange '
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className=' top-0 mt-2 text-xs font-medium uppercase text-CITLOrange'>
        step {value + 1} of {max}
      </div>
    </div>
  );
};

export default ProgressBar;
