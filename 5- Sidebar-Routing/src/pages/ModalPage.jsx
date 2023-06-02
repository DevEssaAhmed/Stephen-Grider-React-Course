import React, { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const actionBar = <Button primary onClick={handleClose}>I Accept</Button>;
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
};

export default ModalPage;
