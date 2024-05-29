import { useState } from 'react';
import './App.css';
import QrPage from './components/qr/QrPage';
import Scan from './components/scan/Scan';
import { BsQrCodeScan } from "react-icons/bs";
import Togglebar from './components/togglebar/togglebar';

function App() {
  const [showQR, setShowQR] = useState(false);
  const [showScan, setShowScan] = useState(false);
  const[ShowScanContent,setShowScanContent]=useState(true);

  const handleQRButtonClick = () => {
    setShowQR(true);
    setShowScan(false);
  };

  const handleScanButtonClick = () => {
    setShowQR(false);
    setShowScan(true);
    setShowScanContent(false)
  };

  return (
    <div className="App">
      <div className="container" >
        {/* <button  onClick={handleQRButtonClick}>Show QR</button> */}
        <Togglebar/>

        {ShowScanContent &&
        <div className='qrcontent'>
          <BsQrCodeScan size={80}/>
        <button className='button' onClick={handleScanButtonClick}>Show Scan</button>
        </div>
}
        
      </div>
      {showQR && <QrPage />}
      {showScan && <Scan />}
    </div>
  );
}

export default App;
