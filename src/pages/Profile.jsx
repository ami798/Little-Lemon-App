import React, { useState } from 'react';

function Profile() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('✅ Profile saved!');
    console.log('Form Data:', formData);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>👤 Your Profile</h1>
      <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Name: </label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ padding: '0.5rem', width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Email: </label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ padding: '0.5rem', width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Phone: </label><br />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{ padding: '0.5rem', width: '100%' }}
          />
        </div>
        <button
          type="submit"
          style={{ padding: '0.5rem 1rem', backgroundColor: '#333', color: '#fff', border: 'none' }}
        >
          Save Profile
        </button>
      </form>
    </div>
  );
}

export default Profile;
