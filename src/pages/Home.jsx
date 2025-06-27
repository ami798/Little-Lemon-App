import React from 'react';
import food1 from '../assets/food1.jpg';
import food2 from '../assets/food2.jpg';
import food3 from '../assets/food3.jpg';

function Home() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      {/* Hero Banner */}
      <div
        style={{
          backgroundImage: `url(${food1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '250px',
          borderRadius: '12px',
          marginBottom: '2rem',
        }}
      ></div>

      {/* Welcome Heading */}
      <h1 style={{ fontSize: '3rem', color: '#2c3e50', marginBottom: '1rem' }}>
        🍋 Welcome to Little Lemon Restaurant!
      </h1>

      <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '2rem' }}>
        Taste the fresh and flavorful dishes of the Mediterranean.
      </p>

      {/* Food Gallery */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        <img
          src={food1}
          alt="Grilled Lemon Chicken"
          style={{
            width: '300px',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '10px',
          }}
        />
        <img
          src={food2}
          alt="Mediterranean Salad"
          style={{
            width: '300px',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '10px',
          }}
        />
        <img
          src={food3}
          alt="Pasta Dish"
          style={{
            width: '300px',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '10px',
          }}
        />
      </div>
    </div>
  );
}

export default Home;
