// import "./App.css";
import React, { useState } from 'react';

import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const handleCreateBook = (title) => {
    //! Bad Code
    // books.push({ id: 123, title: title });
    // setBooks(books)
    if (title === '') {
      return;
    }
    const updatedBooks = [
      ...books,
      {
        id: crypto.randomUUID(),
        title: title,
      },
    ];
    setBooks(updatedBooks);
  };

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
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
