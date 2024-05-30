import { useState } from 'react';
import './App.css';
import QrPage from './components/qr/QrPage';
import Scan from './components/scan/Scan';
import { BsQrCodeScan } from "react-icons/bs";
import Togglebar from './components/togglebar/togglebar';
import RegisterhtmlForm from './components/registrationform/registerForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Viewtable from './components/ViewTable/viewtable';

function App() {
  

  return (
    

<BrowserRouter>
<Togglebar/>
     <Routes>
        <Route path="/register" element={<RegisterhtmlForm />} />
        <Route path="/" element={<Scan />} />
        <Route path="/table" element={<Viewtable/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
