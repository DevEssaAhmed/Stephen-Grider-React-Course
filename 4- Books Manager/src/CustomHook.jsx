import { useContext } from 'react';
import { BooksContext } from './context/BooksContext';

function useBookContext() {
    return useContext(BooksContext)
}

export default useBookContext