import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reservation from './pages/Reservation';
import Profile from './pages/Profile';
import Confirmation from './pages/Confirmation'; // ✅ Added this line
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/confirmation" element={<Confirmation />} /> {/* ✅ New confirmation route */}
      </Routes>
    </>
  );
}

export default App;
