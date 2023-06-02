import React from 'react';
import { GoTrashcan } from 'react-icons/go';
import Button from './Button';
import { removeUser } from '../store/thunks/deleteUser';
import useThunk from '../hooks/use-thunk';
import ExpandablePanel from './ExpandablePanel';
import AlbumsList from './AlbumsList';

const UserListItem = ({ user }) => {
  const [doRemoveUser, isLoading, removeUserError] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  const header = (
    <>
      <Button className='mr-3' loading={isLoading} onClick={handleClick}>
        <GoTrashcan />
      </Button>
      {removeUserError && <div>Error Deleting User</div>}
      {user.name}
    </>
  );
  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
};

export default UserListItem;
