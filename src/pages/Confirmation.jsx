import { useLocation } from 'react-router-dom';

export default function Confirmation() {
  const location = useLocation();
  const { date, seating, diners, occasion } = location.state || {};

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>🎉 Reservation Confirmed!</h2>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Seating:</strong> {seating}</p>
      <p><strong>Diners:</strong> {diners}</p>
      <p><strong>Occasion:</strong> {occasion || 'N/A'}</p>
    </div>
  );
}
