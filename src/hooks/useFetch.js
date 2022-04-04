import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  const [erro, setError] = useState('');

  useEffect(() => {
    (async () => {
      // setIsLoading(true);
      try {
        const response = await fetch(url);
        const dataAPI = await response.json();
        setData(dataAPI);
      } catch (error) {
        setError(error.message);
      // } finally {
      //   setIsLoading(false);
      }
    })();
  }, [url]);
  return { data, erro };
};

export default useFetch;
