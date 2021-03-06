import { useEffect, useState } from 'react';

const useSearch = (searchValue) => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    // console.log('useSearch is running')
    // console.log('searchValue =', searchValue);

    const fetchData = async () => {
      const search = searchValue;
      const queryURL = `https://www.googleapis.com/books/v1/volumes?q=${search}`;

      const response = await fetch(queryURL);
      if (response.ok) {
        const json = await response.json();
        // console.log('fetchData fetch, json.items=', json.items); 

        let bookArray = [];
        for(const data of json.items){
            const createBook = {
              id: data.id,
              authors: data.volumeInfo.authors,
              averageRating: data.volumeInfo.averageRating,
              categories: data.volumeInfo.categories,
              description: data.volumeInfo.description,
              image: data.volumeInfo?.imageLinks?.smallThumbnail,
              infoLink: data.volumeInfo.infoLink,
              pageCount: data.volumeInfo.pageCount,
              publishedDate: data.volumeInfo.publishedDate,
              publisher: data.volumeInfo.publisher,
              title: data.volumeInfo.title,
            }
            
            bookArray.push(createBook);
        }

        setItems(bookArray);

      } else {
        console.log('fetch error', response.status);
      }
    }
    fetchData();

  }, [searchValue]);

  return items;
}

export default useSearch;