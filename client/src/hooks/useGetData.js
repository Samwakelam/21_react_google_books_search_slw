import { useEffect } from 'react';

const useGetData = (onSetData) => {
  // console.log('searchValue =', searchValue);
  // console.log('onSetData =', onSetData);

  useEffect(() => {

    const fetchData = async () => {

      const queryURL = `/api/books`;

      const response = await fetch(queryURL);
      if (response.ok) {
        const json = await response.json();
        console.log('fetchData fetch, json.items=', json); 
        onSetData(json);
      } else {
        console.log('fetch error', response.status);
      }

    }
    fetchData();

  }, []);

}


export default useGetData;