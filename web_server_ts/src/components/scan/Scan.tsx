import { useState, useEffect, useRef } from 'react';
import jsQR from 'jsqr';
import "../../App.css"
import { BiScan } from "react-icons/bi";




const Scan = () => {
  const [data, setData] = useState('No result');
  const videoRef:any = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    
    const constraints = { video: { facingMode: 'environment' } }; // Use rear camera initially

    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch((error) => {
        console.error('Error accessing camera:', error);
      });
  }, []);

  const scanQRCode = () => {
    const video = videoRef.current;
    const canvas:any = canvasRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageData = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height);

    const code = jsQR(imageData.data, imageData.width, imageData.height);

    if (code) {
      setData(code.data);
    } else {
      setData('No QR code found');
    }
  };

  
useEffect(() => {
  scanQRCode()
}, [])

  return (
    <>
      <video ref={videoRef} style={{ width: '100%', height: 'auto', borderRadius:20 }}></video>

      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
      
      {/* <div className='scanqrcon'>  <button className='button' onClick={scanQRCode}>
        <BiScan size={20} style={{marginRight:10}} />
          Scan QR Code</button>
        </div>
       */}
        
      
      {/* <button className='button' onClick={toggleFacingMode}>Toggle Camera</button> */}
      <p>{data}</p>
    </>
  );
};

export default Scan;
