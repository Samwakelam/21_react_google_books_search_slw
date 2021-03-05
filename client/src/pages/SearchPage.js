import React, { useCallback, useState } from 'react';

// styles
import './SearchPage.css';
// components
import Form from '../Form/Form';
import Book from '../Book/Book';
// hooks
import useSearch from '../hooks/useSearch';

const SearchPage = () => {

  const [searchValue , setSearchValue] = useState('');

  const handleSearch = useCallback((value) => {
    // console.log('search page, HandleSearch, value =', value);
    setSearchValue(value);
  })

  const handleSave = useCallback((bookData) => {
    const url = '/api/books'
    fetch( url, {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify(bookData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  });

  const bookData = useSearch(searchValue);
  console.log('bookData', bookData);

  return (
    <div id='search-page'>
      <section>
        <div id='search-books'>
          <Form onSearch={handleSearch} />
        </div>
      </section>

      <section>
        {bookData.map((book) => (
          <Book 
            key={book.id} 
            bookData={book} 
            page={'search'} 
            onSave={handleSave} 
          />
        ))}
      </section>
    </div>
  )
}

export default SearchPage;