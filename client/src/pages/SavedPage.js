import React, {useCallback, useState } from 'react';
// styles
import './SavedPage.css';
// components
import Book from '../Book/Book';
// hooks
import useGetData from '../hooks/useGetData';

const SavedPage = () => {

  // const [bookData, setBookData] = useState([])

  const handleDelete = useCallback((id) => {
    // console.log('delete function, id =', id);
    const url = `/api/books/${id}`
    fetch( url, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      refreshBookData();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  });

  const [bookData , refreshBookData] = useGetData();
  // console.log('savedPage, bookData =', bookData);

  return (
    <div id='saved-page'>
      <section>
        <h2>Your Saved Collection</h2>
      </section>

      <section>
        {bookData.map((book) => (
          <Book 
            key={book.id} 
            bookData={book} 
            page={'saved'} 
            onDelete = {handleDelete}
          />
        ))}
      </section>
    </div>
  )
}

export default SavedPage;