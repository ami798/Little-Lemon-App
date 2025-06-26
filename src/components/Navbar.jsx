import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#eee', padding: '1rem' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/reservation" style={{ marginRight: '1rem' }}>Reservation</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}

export default Navbar;
