import { useState } from 'react';

export const useFetch = () => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const getData = async (location) => {
    try {
      setLoading(true);
      const res = await fetch(`http://localhost:4000/${location}`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: location,
      });

      // const {
      //   data: { days: data },
      // } = await res.json();
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
