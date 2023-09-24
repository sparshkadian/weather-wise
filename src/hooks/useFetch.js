import { useState } from 'react';

export const useFetch = () => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const getData = async (location) => {
    try {
      setLoading(true);
      const res = await fetch(`https://weather-wise.onrender.com/${location}`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: location,
      });

      const { status, data } = await res.json();
      setData(data);
      setStatus(status);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return { status, data, loading, getData };
};
