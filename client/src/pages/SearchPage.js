import React, {useState } from 'react';

// styles
import './SearchPage.css';
// components
import Form from '../Form/Form';
import Book from '../Book/SearchBook';
// hooks
import useSearch from '../hooks/useSearch';

const SearchPage = () => {

  const [bookData , setBookData] = useState([]);
  const [searchValue , setSearchValue] = useState('');

  const handleSearch = (value) => {
    // console.log('search page, HandleSearch, value =', value);
    setSearchValue(value);
  }

  const onSetData = (data) => {
    setBookData(data)
  }

  useSearch(searchValue, onSetData)

  return (
    <div id='search-page'>
      <section>
        <div id='search-books'>
          <Form onSearch={handleSearch} />
        </div>
      </section>

      <section>
        <Book bookData={bookData} />
      </section>
    </div>
  )
}

export default SearchPage;