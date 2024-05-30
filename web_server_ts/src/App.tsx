import { useState } from 'react';
import './App.css';
import QrPage from './components/qr/QrPage';
import Scan from './components/scan/Scan';
import { BsQrCodeScan } from "react-icons/bs";
import Togglebar from './components/togglebar/togglebar';

function App() {
  const [, setShowQR] = useState(false);
  const [, setShowScan] = useState(false);
  const[ShowScanContent,setShowScanContent]=useState(false);

  const handleScanButtonClick = () => {
    setShowQR(false);
    setShowScan(true);
    setShowScanContent(false)
  };

  return (
    <div className="App">
        <Togglebar/>
      <div className="container">
        {/* <button  onClick={handleQRButtonClick}>Show QR</button> */}

        {/* <RegisterhtmlForm/> */}

        {ShowScanContent &&
        <div className='qrcontent'>
          <BsQrCodeScan size={80}/>
        <button className='button' onClick={handleScanButtonClick}>Show Scan</button>
        </div>
}
        
      </div>
     {/* <QrPage /> */}
       <Scan />
    </div>
  );
}

export default App;
