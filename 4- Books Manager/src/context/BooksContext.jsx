import { createContext, useCallback, useState } from 'react';
import axios from 'axios';

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data);
  }, []);

  // const stableFetchBooks = useCallback(fetchBooks, []);

  // Edit Book By Id
  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        // return { ...book, title: newTitle };
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  // Delete Book By Id

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  //Create Book
  const handleCreateBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title,
    });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
    //! Bad Code
    // books.push({ id: 123, title: title });
    // setBooks(books)
    // if (title === '') {
    //   return;
    // }
    // const updatedBooks = [
    //   ...books,
    //   {
    //     id: crypto.randomUUID(),
    //     title: title,
    //   },
    // ];
  };

  const value = {
    books,
    deleteBookById,
    editBookById,
    handleCreateBook,
    fetchBooks,
  };

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
};

//   const [count, setCount] = useState(5);

//   const valueToShare = {
//     count,
//     incrementCount: () => {
//       setCount(count + 1);
//     },
//   };

//   return (
//     <BooksContext.Provider value={valueToShare}>
//       {children}
//     </BooksContext.Provider>
//   );
// };
