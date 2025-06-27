import { useState } from 'react';



export default function Reservation() {
  const [date, setDate] = useState('');
  const [occasion, setOccasion] = useState('');
  const [diners, setDiners] = useState('');
  const [seating, setSeating] = useState('');

  const handleSubmit = () => {
    console.log({ date, occasion, diners, seating });
    alert(`✅ Reservation Confirmed!\n\nDate: ${date}\nSeating: ${seating}\nDiners: ${diners}\nOccasion: ${occasion || 'N/A'}`);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: 'auto' }}>
      <h2>📝 Make a Reservation</h2>

      <div style={{ marginTop: '1rem' }}>
        <strong>Seating:</strong><br />
        <label>
          <input type="radio" value="Indoor" name="seating" onChange={(e) => setSeating(e.target.value)} />
          Indoor
        </label>
        <label style={{ marginLeft: '1rem' }}>
          <input type="radio" value="Outdoor" name="seating" onChange={(e) => setSeating(e.target.value)} />
          Outdoor
        </label>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <strong>Date:</strong><br />
        <input type="date" onChange={(e) => setDate(e.target.value)} />
      </div>

      <div style={{ marginTop: '1rem' }}>
        <strong>Occasion:</strong><br />
        <select onChange={(e) => setOccasion(e.target.value)}>
          <option value="">Select Occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <strong>Number of Diners:</strong><br />
        <select onChange={(e) => setDiners(e.target.value)}>
          <option value="">Select</option>
          {[...Array(10)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1} Diner{i > 0 ? 's' : ''}
            </option>
          ))}
        </select>
      </div>

      <button
        style={{
          marginTop: '1.5rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#f4ce14',
          border: 'none',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
        onClick={handleSubmit}
      >
        Reserve a Table
      </button>
    </div>
  );
}
