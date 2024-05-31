import QRCode from 'qrcode.react';

const QrPage = () => {
  const url = 'atendence';

  return (
    <div style={{marginTop:"4rem",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <h2 style={{color:"whitesmoke",marginBottom:"2rem"}}>Scan the QR code:</h2>
      <QRCode value={url} />
    </div>
  );
};

export default QrPage;
