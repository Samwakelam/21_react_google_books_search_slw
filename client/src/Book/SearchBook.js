import React from 'react';
// styles
import './Book.css';
// components
import Book from '../Book/Book';


const saveData = async (bookToSave) => {

  const url = '/api/books'
  fetch( url, {
    method: 'POST',
    headers: { 'content-Type': 'application/json' },
    body: JSON.stringify(bookToSave),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}


const Book = ({ bookData }) => {

  

  return(
  
    bookData.map((book) => (
      <Book bookData={book} onSave={onSave} key={book.id} />
    ))
    
  );
}

export default Book;


// const onSave = (event) => {
//   event.preventDefault();
//   event.stopPropagation();

//   const selectedBook = JSON.parse(event.target.dataset.book);
//   // console.log('selectedBook =', selectedBook);
//   const createBookToSave = {
//     id: selectedBook.id,
//     authors: selectedBook.volumeInfo.authors,
//     averageRating: selectedBook.volumeInfo.averageRating,
//     categories: selectedBook.volumeInfo.categories,
//     description: selectedBook.volumeInfo.description,
//     image: selectedBook.volumeInfo.imageLinks.smallThumbnail,
//     infoLink: selectedBook.volumeInfo.infoLink,
//     pageCount: selectedBook.volumeInfo.pageCount,
//     publishedDate: selectedBook.volumeInfo.publishedDate,
//     publisher: selectedBook.volumeInfo.publisher,
//     title: selectedBook.volumeInfo.title,
//   }
//   console.log('createBookToSave =', createBookToSave);

//   // const createdBook = useCreateBook(selectedBook.id, selectedBook.volumeInfo);
//   // useSaveBook(createBookToSave)
//   saveData(createBookToSave)
// }