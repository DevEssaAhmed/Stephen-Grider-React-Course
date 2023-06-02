// import "./App.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get('http://localhost:3001/books');
      setBooks(response.data);
    };
    fetchBooks();
  }, [books]);

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

  //! Edit Book By Id
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

  //! Delete Book By Id

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };
  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookList books={books} onEdit={editBookById} onDelete={deleteBookById} />
      <BookCreate onCreate={handleCreateBook} />
    </div>
  );
}

export default App;
