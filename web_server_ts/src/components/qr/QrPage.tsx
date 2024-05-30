import QRCode from 'qrcode.react';

const QrPage = () => {
  const url = 'atendence';

  return (
    <div>
      <h2>Scan the QR code:</h2>
      <QRCode value={url} />
    </div>
  );
};

export default QrPage;
