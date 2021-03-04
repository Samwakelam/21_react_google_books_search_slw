import { useEffect } from 'react';

const useSaveBook = (bookToSave) => {

  console.log('bookToSave =', bookToSave);

  useEffect(() => {

    const saveData = async () => {

      const url = '/api/books'
      const response = await fetch( url, {
        method: 'POST',
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify(bookToSave),
      });
      if (response.ok) {
        const json = await response.json();
        console.log('saveData fetch, json=', json); 

      } else {
        console.log('fetch error', response.status);
      }
    }

  }, [bookToSave]);

}


export default useSaveBook;