import { useState, useEffect, useRef } from 'react';
import jsQR from 'jsqr';
import "../../App.css"
import { BiScan } from "react-icons/bi";
import axios from 'axios';

const Scan = () => {
  const [data, setData] = useState('No result');
  const videoRef = useRef<any>(null);
  const canvasRef = useRef<any>(null);
  const [lat,setLat]=useState<any>("")
  const [long,setLong]=useState<any>("")
  
  const attendenceApi = async ()=>{
    const result = axios.post("http://localhost:8989/api/v1/attendence/present",{
      username:"tesst",
      userId:"123s4",
      lat:lat,
      long:long
    })
    console.log("response====>",result)
  }
  
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

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('Latitude:', position.coords.latitude);
          setLat(position.coords.latitude)
          console.log('Longitude:', position.coords.longitude);
          setLong(position.coords.longitude)
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  const scanQRCode = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageData = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height);

    const code = jsQR(imageData.data, imageData.width, imageData.height);

    if (code) {
      setData(code.data);
      console.log("QR Code Data:", code.data);
      if(code.data==="atendence"){

        attendenceApi()
      }else{
        alert("wrong qr")
      }
    } else {
      setData('No QR code found');
    }
  };

  return (
    <>
      <video ref={videoRef} style={{ width: '100%', height: 'auto', borderRadius: 20 }}></video>

      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
      
      <div className='scanqrcon'>  
        <button className='button' onClick={scanQRCode}>
          <BiScan size={20} style={{ marginRight: 10 }} />
          Scan QR Code
        </button>
      </div>
      <p>{data}</p>
    </>
  );
};

export default Scan;
