import { useEffect, useState } from 'react';

const useGetData = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {

    const fetchData = async () => {

      const queryURL = `/api/books`;

      const response = await fetch(queryURL);
      if (response.ok) {
        const json = await response.json();
        console.log(' useGetData, response, json.items=', json); 
        setItems(json);
      } else {
        console.log('fetch error', response.status);
      }

    }
    fetchData();

    return () => {
      console.log('I did unmount');
    }; 

  }, []);

  return items;

}


export default useGetData;