import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import DataDisplay from './DataDisplay';
import Spinner from './Spinner';

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const { data, loading, getData } = useFetch();

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.length === 0) {
      setMessage('Please Enter a Location!');
    } else {
      getData(location);
      setLocation('');
      setMessage('');
    }
  };

  return (
    <>
      <div className='flex justify-center p-4'>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col items-center w-4/5 md:w-1/2 lg:w-[40%]'
        >
          <p className='enter-location text-2xl font-semibold'>
            Enter Your Location:{' '}
          </p>

          <div className='w-full relative mt-2 overflow-hidden'>
            <input
              onChange={handleChange}
              value={location}
              type='text'
              className='w-full focus:outline-none p-1 text-lg shadow-md rounded-md'
            />
            <button className='search-button px-2 bg-zinc-200' type='submit'>
              <img src='../search.png' alt='search' width={20} />
            </button>
          </div>

          {message && <p className='mt-4 text-xl'>{message}</p>}
        </form>
      </div>

      {loading && <Spinner />}

      {!loading && data && <DataDisplay data={data} />}
    </>
  );
};

export default SearchBar;
