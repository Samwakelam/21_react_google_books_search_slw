import { useEffect, useState } from 'react';

const useCreateBook = (id, data) => {

  const [book, setBook] = useState({})

  useEffect(() => {
    const bookObject = {
      id: id,
      authors: data.authors,
      averageRating: data.averageRating,
      categories: data.categories,
      description: data.description,
      img: data.imageLinks.smallThumbnail,
      infoLink: data.infoLink,
      pageCount: data.pageCount,
      publishedDate: data.publishedDate,
      publisher: data.publisher,
      title: data.title,
    }
    setBook(bookObject);
  }, [id, data, setBook])

  return book;
}

export default useCreateBook;