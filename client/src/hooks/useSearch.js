import { useEffect } from 'react';

const useSearch = (searchValue, onSetData) => {
  // console.log('searchValue =', searchValue);
  // console.log('onSetData =', onSetData);

  useEffect(() => {

    const fetchData = async () => {

      const search = searchValue;
      const queryURL = `https://www.googleapis.com/books/v1/volumes?q=${search}`;

      const response = await fetch(queryURL);
      if (response.ok) {
        const json = await response.json();
        // console.log('fetchData fetch, json.items=', json.items); 
        onSetData(json.items);
      } else {
        console.log('fetch error', response.status);
      }

    }
    fetchData();

  }, [searchValue, onSetData]);

}


export default useSearch;