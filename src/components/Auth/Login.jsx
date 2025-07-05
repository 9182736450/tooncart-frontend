import './Auth.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Dummy login handler
  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate login (you can add validation or API later)
    if (email && password) {
      // Redirect to products page
      navigate('/products');
    } else {
      alert("Please enter email and password.");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleLogin}>
        <h2>Welcome Back 👋</h2>
        <p className="subtitle">Login to your ToonCart account</p>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

        <p className="toggle-text">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
        <p className="toggle-text">
          <Link to="/">← Back to Home</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
