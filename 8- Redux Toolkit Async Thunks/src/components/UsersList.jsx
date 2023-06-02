import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { fetchUsers, addUser } from '../store';
import Button from './Button';
import Skeleton from './Skeleton';
import useThunk from '../hooks/use-thunk';
import UserListItem from './UserListItem';

const UsersList = () => {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);
  const [hasFetchedOnce, setHasFetchedOnce] = useState(false);
  // const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  // const [loadingUsersError, setLoadingUsersError] = useState(null);

  // const [isCreatingUser, setIsCreatingUser] = useState(false);
  // const [creatingUserError, setCreatingUserError] = useState(null);

  const { data } = useSelector((state) => {
    return state.users; // {data: [], isLoading: false, error: null}
  });

  // useEffect(() => {
  //   setIsLoadingUsers(true);
  //   dispatch(fetchUsers())
  //     .unwrap()
  //     .then(() => {
  //       setIsLoadingUsers(false);
  //     })
  //     .catch((err) => {
  //       setLoadingUsersError(err);
  //     })
  //     .finally(() => {
  //       setIsLoadingUsers(false);
  //     });
  // }, [dispatch]);

  useEffect(() => {
    doFetchUsers();
    setHasFetchedOnce(true);
  }, [doFetchUsers]);

  // const handleUserAdd = () => {
  //   setIsCreatingUser(true);
  //   dispatch(addUser())
  //     .unwrap()
  //     .catch((err) => setCreatingUserError(err))
  //     .finally(() => setIsCreatingUser(false));
  // };

  const handleUserAdd = async () => {
    await doCreateUser();
    doFetchUsers();
  };

  // const renderedUsers = data.map((user) => {});

  let content;
  if (isLoadingUsers && !hasFetchedOnce) {
    content = <Skeleton times={6} className='h-10 w-full' />;
  } else if (loadingUsersError) {
    content = <div>Error fetching data...</div>;
  } else {
    content = data.map((user) => {
      return <UserListItem key={user.id} user={user} />;
    });
  }
  return (
    <div>
      <div className='flex flex-row justify-between m-3 items-center'>
        <h1 className='m-2 text-xl'> Users</h1>

        <Button loading={isCreatingUser} onClick={handleUserAdd}>
          + Add User
        </Button>

        {creatingUserError && 'Error creating User...'}
      </div>
      {content}
    </div>
  );
};

export default UsersList;
