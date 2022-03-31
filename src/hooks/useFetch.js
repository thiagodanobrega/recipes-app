import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorAPI, setErrorAPI] = useState('');

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const dataAPI = await response.json();
        setData(dataAPI);
      } catch (error) {
        setErrorAPI(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [url]);
  return { data, isLoading, errorAPI };
};

export default useFetch;
