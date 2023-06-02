import { useEffect, useState } from 'react';
import './App.css';

import AccordionPage from './pages/AccordionPage';
import DropDownPage from './pages/DropDownPage';
import ButtonPage from './pages/ButtonPage';
import ModalPage from './pages/ModalPage';
import TablePage from './pages/TablePage';
import Route from './helpers/Route';
import SideBar from './components/SideBar';
function App() {
  return (
    <div className='container grid gap-4 mx-auto mt-4 cols-6'>
      <SideBar />
      <div className='col-span-5'>
        <Route path='/'>
          <DropDownPage />
        </Route>
        <Route path='/accordion'>
          <AccordionPage />
        </Route>
        <Route path='/buttons'>
          <ButtonPage />
        </Route>
        <Route path='/modal'>
          <ModalPage />
        </Route>
        <Route path='/table'>
          <TablePage />
        </Route>
      </div>
    </div>
  );
}
export default App;
