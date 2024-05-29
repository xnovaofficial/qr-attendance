import { useState } from 'react';
import './App.css';
import QrPage from './components/qr/QrPage';
import Scan from './components/scan/Scan';

function App() {
  const [showQR, setShowQR] = useState(false);
  const [showScan, setShowScan] = useState(false);

  const handleQRButtonClick = () => {
    setShowQR(true);
    setShowScan(false);
  };

  const handleScanButtonClick = () => {
    setShowQR(false);
    setShowScan(true);
  };

  return (
    <div className="App">
      <div className="buttons">
        <button onClick={handleQRButtonClick}>Show QR</button>
        <button onClick={handleScanButtonClick}>Show Scan</button>
      </div>
      {showQR && <QrPage />}
      {showScan && <Scan />}
    </div>
  );
}

export default App;
