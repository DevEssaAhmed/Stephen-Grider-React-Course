import React, { useState } from 'react';

const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(book.id, title);
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
