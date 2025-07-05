import './Auth.css';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="auth-container">
      <form className="auth-form">
        <h2>Join ToonCart 🎉</h2>
        <p className="subtitle">Create your free account</p>

        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="password" placeholder="Password" required />

        <button type="submit">Sign Up</button>

        <p className="toggle-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <p className="toggle-text">
          <Link to="/">← Back to Home</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
