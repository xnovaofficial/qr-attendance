
import './App.css';

import Scan from './components/scan/Scan';

import Togglebar from './components/togglebar/togglebar';
import RegisterhtmlForm from './components/registrationform/registerForm';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Viewtable from './components/ViewTable/viewtable';
import Protected from './components/protected/Protected';
import  Signform  from './components/signinform/Signform';

function App() {


  return (


    <BrowserRouter>
      <Togglebar />
      <Routes>
        <Route path="/" element={<Navigate to="/scan" />} />
        <Route path="/register" element={<RegisterhtmlForm />} />

        <Route path="/scan" element={<Protected />}>
          <Route path="/scan" element={<Scan />} />
        </Route>

        <Route path="/table" element={<Protected />}>
          <Route path="/table" element={<Viewtable />} />
        </Route>

        <Route path="/signin" element={<Protected />}>
          <Route path="/signin" element={<Signform/>} />
        </Route>

        {/* <Route path="/scan" element={<Scan />} /> */}
        {/* <Route path="/table" element={<Viewtable />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
