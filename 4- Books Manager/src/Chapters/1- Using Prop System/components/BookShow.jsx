import React, { useState } from 'react';
import BookEdit from './BookEdit';

const BookShow = ({ book, onDelete, onEdit}) => {
  const { title, id } = book;

  const [showEdit, setShowEdit] = useState(false);
  const handleDelete = () => {
    onDelete(id);
  };

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id,newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  return (
    <div className='book-show'>
      <img src={`https://picsum.photos/seed/${id}/300/200`} alt='title' />
      {showEdit ? <BookEdit onSubmit={handleSubmit} book={book} /> : title}
      <div className='actions'>
        <button className='edit' onClick={handleEdit}>
          Edit
        </button>
        <button className='delete' onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
