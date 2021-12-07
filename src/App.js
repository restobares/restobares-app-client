import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ActiveOrders from './components/ActiveOrders/ActiveOrders';

function App() {
  return (
    <BrowserRouter>      
      <Routes>
        <Route path="/feed" element={<ActiveOrders />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
