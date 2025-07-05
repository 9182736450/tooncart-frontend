// src/components/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>🛒 Welcome to ToonCart</h1>
      <p>Your favorite cartoon toys shop!</p>
      <Link to="/login">
        <button style={{ marginRight: '10px' }}>Login</button>
      </Link>
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
    </div>
  );
}

export default Home;
