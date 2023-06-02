import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {BooksProvider} from './context/BooksContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BooksProvider>
      <App />
    </BooksProvider>
  </React.StrictMode>
);
