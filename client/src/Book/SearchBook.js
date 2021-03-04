import React from 'react';
// styles
import './Book.css';
// hooks
// import useSaveBook from '../hooks/useSaveBook';
// import useCreateBook from '../hooks/useCreateBook';


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

  // console.log('bookData =', bookData);

  const onSave = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const selectedBook = JSON.parse(event.target.dataset.book);
    // console.log('selectedBook =', selectedBook);
    const createBookToSave = {
      id: selectedBook.id,
      authors: selectedBook.volumeInfo.authors,
      averageRating: selectedBook.volumeInfo.averageRating,
      categories: selectedBook.volumeInfo.categories,
      description: selectedBook.volumeInfo.description,
      img: selectedBook.volumeInfo.imageLinks.smallThumbnail,
      infoLink: selectedBook.volumeInfo.infoLink,
      pageCount: selectedBook.volumeInfo.pageCount,
      publishedDate: selectedBook.volumeInfo.publishedDate,
      publisher: selectedBook.volumeInfo.publisher,
      title: selectedBook.volumeInfo.title,
    }
    console.log('createBookToSave =', createBookToSave);

    // const createdBook = useCreateBook(selectedBook.id, selectedBook.volumeInfo);
    // useSaveBook(createBookToSave)
    saveData(createBookToSave)
  }

  return(
  
    bookData.map((book) => (
      
        (book.volumeInfo.imageLinks) && (
          <article key={book.id} id={book.id} className='book-container'>
            <div className='book-title'>
              <h2>{book.volumeInfo.title}</h2>
              <p className='details'><span className='bold'>Authors: </span> {(book.volumeInfo.authors).map(author => (<span className='author'>{author},</span>))} </p>
              <p className='details'><span className='bold'>Category: </span> {book.volumeInfo.categories} </p>
            </div>
            
            <div className='book-action'>
              <img 
                className='book-cover' 
                src={book.volumeInfo.imageLinks.smallThumbnail} 
                alt='book cover'
                
              />
             
              <button>
                <a 
                  href={book.volumeInfo.infoLink}
                  target='_blank'
                  rel="noopener noreferrer"
                >
                    View
                  </a>
              </button>

              <button onClick={onSave} data-book={JSON.stringify(book)}>Save</button>
            </div>
            
            <div className='book-details'>
              <h4>Description: </h4>
              <p> {book.volumeInfo.description} </p>
              
              <p className='details'><span className='bold'>Page Count: </span> {book.volumeInfo.pageCount} </p>
              <p className='details'><span className='bold'>Rating: </span> {book.volumeInfo.averageRating} </p>
              <p className='details'><span className='bold'>Publisher: </span> {book.volumeInfo.publisher} <span className='bold'>Date: </span> {book.volumeInfo.publishedDate} </p>
            </div>
          </article>
        )
      
      
    ))
    
  );
}

export default Book;