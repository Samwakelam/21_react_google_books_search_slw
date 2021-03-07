import React, {useState} from 'react';
// styles
import './Book.css';

const Book = ({ bookData, page, onSave, onDelete }) => {

  const { id, title, authors, categories, image, infoLink, description, pageCount, averageRating, publisher, publishedDate } = bookData

  const [saved, setSaved] = useState(false);

  const setSave = () => {
    setSaved(true);
  }

  return (
    <article id={id} className='book-container'>
      <div className='book-title'>
        <h2>{title}</h2>
        <p className='details'><span className='bold'>Authors: </span> {authors && ( authors.map(author => (<span key={`${id}-${author}`} className='author'>{author},</span>)) ) } </p>
        <p className='details'><span className='bold'>Category: </span> {categories} </p>
      </div>

      <div className='book-action'>
        <img
          className='book-cover'
          src={image}
          alt='book cover'
        />

        <button>
          <a
            href={infoLink}
            target='_blank'
            rel="noopener noreferrer"
          >
            View
          </a>
        </button>

        {(page === 'search' && saved === false) && <button onClick={() => {onSave(bookData); setSave();}} >Save</button>}
        {page === 'saved' && <button onClick={() => onDelete(id)} >Delete</button>}
        {saved === true && <p className='book-save'>You have saved this book</p>}
      </div>

      <div className='book-details'>
        <h4>Description: </h4>
        <p> {description} </p>

        <p className='details'><span className='bold'>Page Count: </span> {pageCount} </p>
        <p className='details'><span className='bold'>Rating: </span> {averageRating} </p>
        <p className='details'><span className='bold'>Publisher: </span> {publisher} <span className='bold'>Date: </span> {publishedDate} </p>
      </div>
    </article>
  )
}

export default Book;