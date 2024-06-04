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


  const userId = localStorage.getItem("@userId")
  const userName = localStorage.getItem("@userName")
  const userRole = localStorage.getItem("@userrole")

  const attendenceApi = async ()=>{
    try {
      const result:any = await axios.post("https://qr-attendance-be.onrender.com/api/v1/attendence/present",{
      username:userName,
      userId:userId,
      lat:lat,
      long:long,
      role:userRole
    })
    console.log("response====>",result)
    if(result.status === 200){
      alert("Attendance sucessfully added")
    }else {
      alert("Attendance already submited for today")
    }
    } catch (error) {
      console.log(error)
      alert("Attendance already submited for today")
    }
    
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
    <div className='pb-5' style={{marginTop:"55px"}}>
      <video ref={videoRef} style={{ width: '100%', height: '70vh' }}></video>

<canvas ref={canvasRef} style={{ display: 'none', height: "100vh" }}></canvas>
      <div className='scanqrcon'>  
        {/* <button className='button' onClick={scanQRCode}>
      
          <BiScan size={20} style={{ marginRight: 10 }} />
          Scan QR Code
        </button> */}
        <div>
        <button className="btn" onClick={scanQRCode}>
    <span className="btn-text-one">
    <BiScan size={20} style={{ marginRight: 10 }}/>
      SCAN</span>
    {/* <span className="btn-text-two"><BiScan size={20} style={{ marginRight: 10 }}/>
      SCAN</span> */}
</button>
</div>
      </div>
      <div className="" style={{marginLeft:"auto",marginRight:"auto",flexDirection:"row",display:"flex",alignItems:"baseline",justifyContent:"center",marginTop:30}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-clipboard2-data" viewBox="0 0 16 16">
  <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z"/>
  <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z"/>
  <path d="M10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm4-3a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1"/>
</svg>
      <p style={{color:"white"}}>
      {data==="atendence"?<p>QR Detected</p>:data}
      </p>
      </div>
    </div>
  );
};

export default Scan;
