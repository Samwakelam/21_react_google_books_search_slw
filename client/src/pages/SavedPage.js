import React, {useState } from 'react';
// styles
import './SavedPage.css';
// components
import Book from '../Book/SaveBook';
import useGetData from '../hooks/useGetData';

const SavedPage = () => {

  const [bookData , setBookData] = useState([]);

  const onSetData = (data) => {
    console.log('SavedPage, data =', data);
    setBookData(data)
  }

  useGetData(onSetData)
  console.log('savedPage, bookData =', bookData);

  return (
    <div id='saved-page'>
      <section>
        <h2>Your Saved Collection</h2>
      </section>

      <section>
        <Book bookData={bookData} />
      </section>
    </div>
  )
}

export default SavedPage;