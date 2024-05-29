import QRCode from 'qrcode.react';

const QrPage = () => {
  const url = 'https://mail.google.com/mail/u/0/#inbox';

  return (
    <div>
      <h2>Scan the QR code:</h2>
      <QRCode value={url} />
    </div>
  );
};

export default QrPage;
