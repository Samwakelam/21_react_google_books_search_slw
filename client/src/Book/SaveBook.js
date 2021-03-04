import React from 'react';
// styles
import './Book.css';

const Book = ({ bookData }) => {

  console.log('bookData =', bookData);

  return(
  
    bookData.map((book) => (
      
        (book.imageLinks) && (
          <article key={book.id} id={book.id} className='book-container'>
            <div className='book-title'>
              <h2>{book.title}</h2>
              <p className='details'><span className='bold'>Authors: </span> {(book.authors).map(author => (<span className='author'>{author},</span>))} </p>
              <p className='details'><span className='bold'>Category: </span> {book.categories} </p>
            </div>
            
            <div className='book-action'>
              <img 
                className='book-cover' 
                src={book.img} 
                alt='book cover'
                
              />
             
              <button>
                <a 
                  href={book.infoLink}
                  target='_blank'
                  rel="noopener noreferrer"
                >
                    View
                  </a>
              </button>

              <button  data-bookID={book.id}>Delete</button>
            </div>
            
            <div className='book-details'>
              <h4>Description: </h4>
              <p> {book.description} </p>
              
              <p className='details'><span className='bold'>Page Count: </span> {book.pageCount} </p>
              <p className='details'><span className='bold'>Rating: </span> {book.averageRating} </p>
              <p className='details'><span className='bold'>Publisher: </span> {book.publisher} <span className='bold'>Date: </span> {book.publishedDate} </p>
            </div>
          </article>
        )
      
      
    ))
    
  );
}

export default Book;