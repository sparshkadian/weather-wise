import { useState } from 'react';

const DataDisplay = ({ data }) => {
  console.log(data);
  const date = data.days[0].datetime;
  const temp = data.currentConditions.temp;
  const humidity = data.currentConditions.humidity;
  const windSpeed = data.currentConditions.windspeed;
  const [isFarenheight, setIsFarenheight] = useState(true);

  const showFahrenheit = () => {
    // if (isFarenheight) return;
    // else {
    //   setTemp((temp * 1.8 + 32).toFixed(2));
    //   setIsFarenheight(true);
    // }
  };

  const showCelsius = () => {
    // if (isFarenheight) {
    //   setTemp((((temp - 32) * 5) / 9).toFixed(2));
    //   setIsFarenheight(false);
    // } else return;
  };

  return (
    <div className='w-4/5 lg:w-1/2 flex flex-col items-center border-2 rounded-md shadow-xl m-auto p-2'>
      <div className='w-full flex justify-around text-xl'>
        <p className='capitalize'>{data.address}</p>
        <p>{date}</p>
      </div>

      <div className='flex mt-10'>
        <p className='text-[5rem]'>{temp}&deg;</p>
        <div className='font-semibold'>
          <button
            onClick={() => {
              showFahrenheit(temp);
            }}
          >
            <p className={`${isFarenheight ? 'text-black' : 'text-zinc-300'} `}>
              &deg;F
            </p>
          </button>{' '}
          |
          <button
            onClick={() => {
              showCelsius(temp);
            }}
          >
            <p
              className={`${!isFarenheight ? 'text-black' : 'text-zinc-300'} `}
            >
              &deg;C
            </p>
          </button>
        </div>
      </div>

      <div className='mt-2 flex gap-5'>
        <div className='flex gap-1'>
          <img src='../humidity.png' alt='humidity' width={25} />
          <p>{humidity}%</p>
        </div>
        <div className='flex gap-1'>
          <img src='../wind.png' alt='humidity' width={25} />
          <p>{windSpeed}mph</p>
        </div>
      </div>

      <div className='mt-10'>
        <p className='text-xl'>{data.currentConditions.conditions}</p>
      </div>
    </div>
  );
};

export default DataDisplay;
