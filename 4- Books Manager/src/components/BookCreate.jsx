import React, { useState, useContext } from 'react';
import {BooksContext} from '../context/BooksContext';

const BookCreate = () => {
  const [title, setTitle] = useState('');
  const { handleCreateBook } = useContext(BooksContext);
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleCreateBook(title);
    setTitle('');
  };
  return (
    <div className='book-create'>
      <h3>Add a Book</h3>
      <form action='' onSubmit={handleSubmit}>
        <label htmlFor=''>Title</label>
        <input
          className='input'
          type='text'
          value={title}
          onChange={handleChange}
        />
        <button className='button'>Create</button>
      </form>
    </div>
  );
};

export default BookCreate;
