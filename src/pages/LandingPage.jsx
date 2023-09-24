import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import animation from './../animations/animation.json';

const LandingPage = () => {
  return (
    <div className='landing-page bg-white shadow-xl rounded-md sm:grid grid-cols-1 sm:grid-cols-2 w-4/5 h-[65vh] sm:h-max m-auto mt-[100px] sm:mt-[150px] md:mt-15 lg:mt-12 p-4'>
      <div className='hidden sm:block self-center'>
        <Lottie animationData={animation} />
      </div>

      <div className='mt-10 sm:m-0 flex flex-col items-center justify-center gap-10 sm:gap-5'>
        <div className='text-center'>
          <p className='text-[3rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem]'>
            Weather
          </p>
          <p className='text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem]'>
            Wise
          </p>
        </div>
        <p className='text-center font-semibold'>
          A Web App to get Weather Data of your location
        </p>
        <button className='bg-black px-4 py-2 rounded-md text-white'>
          <Link to='/home'>Get Started</Link>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
