import React from 'react';
import {useState} from 'react';
// styles
import './Form.css';

const Form = ({onSearch}) => {

  const [searchField , setSearchField] = useState('');
  
  const onChangeBookSearch = (event) => {
    // console.log(event.target.value);
    setSearchField(event.target.value)
  }

  const onClickSearch = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const value = document.getElementById('search-field').value;
    // console.log('value =', value);
    onSearch(value);
  }

  return (
    <form>
      <label id='search-book' htmlFor='search-field'> Search Book:</label>
      <input id='search-field' type='text' name='search-field' onChange={onChangeBookSearch} value={searchField}></input>
      <button id='search-btn' onClick={onClickSearch}>Search</button>
    </form>
  )
}

export default Form;