import React, { useState } from 'react';
import { BooksContext } from '../context/BooksContext';
import useBookContext from '../CustomHook';

const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState('');
  const { editBookById } = useBookContext;

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit();
    editBookById(book.id, title);
  };
  return (
    <form className='book-edit' onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        className='input'
        type='text'
        value={title}
        onChange={handleChange}
      />
      <button className='button is-primary'>Create</button>
    </form>
  );
};

export default BookEdit;
