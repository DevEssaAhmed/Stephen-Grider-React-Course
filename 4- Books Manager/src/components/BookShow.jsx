import React, { useState} from 'react';
import BookEdit from './BookEdit';

import useBookContext from '../CustomHook';


const BookShow = ({ book }) => {
  const { title, id } = book;
  const { deleteBookById } = useBookContext()

  const [showEdit, setShowEdit] = useState(false);
  const handleDelete = () => {
    deleteBookById(id);
  };

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  
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
