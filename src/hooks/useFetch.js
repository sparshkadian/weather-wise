import { useState } from 'react';

export const useFetch = () => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

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

      const { data } = await res.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return { data, loading, getData };
};
