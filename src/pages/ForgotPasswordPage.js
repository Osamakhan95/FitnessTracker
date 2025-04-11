import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AuthPages.css';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    setEmail(e.target.value);
    setError('');
  };
  
  const validateForm = () => {
    if (!email) {
      setError('Email is required');
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Email address is invalid');
      return false;
    }
    return true;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Submit form data to backend
      console.log('Password reset requested for:', email);
      // Here you would typically make an API call to request password reset
      setSubmitted(true);
    }
  };
  
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <Link to="/" className="auth-logo">FitnessTrack</Link>
          <h2>Forgot Password</h2>
          <p>Enter your email address and we'll send you a link to reset your password.</p>
        </div>
        
        {submitted ? (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h3>Check your email</h3>
            <p>We've sent a password reset link to {email}.</p>
            <p>If you don't see it, please check your spam folder.</p>
            <Link to="/signin" className="btn btn-primary btn-full">Back to Sign In</Link>
          </div>
        ) : (
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={error ? 'error' : ''}
              />
              {error && <span className="error-message">{error}</span>}
            </div>
            
            <button type="submit" className="btn btn-primary btn-full">Send Reset Link</button>
          </form>
        )}
        
        <div className="auth-footer">
          <p>Remembered your password? <Link to="/signin">Sign in</Link></p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;