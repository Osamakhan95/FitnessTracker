import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/AuthPages.css';

const EmailVerificationPage = () => {
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Get the token from URL query params
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');
  
  useEffect(() => {
    // Simulate verifying the token
    const verifyEmail = async () => {
      setLoading(true);
      
      try {
        // Here you would typically make an API call to verify the token
        // Simulating API request with timeout
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        if (token) {
          setVerified(true);
        } else {
          setError('Invalid verification link. Please request a new verification email.');
        }
      } catch (err) {
        setError('An error occurred during verification. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    
    verifyEmail();
  }, [token]);
  
  const requestNewVerification = () => {
    // Here you would typically make an API call to request a new verification email
    console.log('New verification requested');
    setError('A new verification email has been sent. Please check your inbox.');
  };
  
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <Link to="/" className="auth-logo">FitnessTrack</Link>
          <h2>Email Verification</h2>
        </div>
        
        <div className="verification-content">
          {loading ? (
            <div className="loading">
              <div className="spinner"></div>
              <p>Verifying your email address...</p>
            </div>
          ) : verified ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>Email Verified!</h3>
              <p>Your email has been successfully verified. You can now sign in to your account.</p>
              <Link to="/signin" className="btn btn-primary btn-full">Sign In</Link>
            </div>
          ) : (
            <div className="error-content">
              <div className="error-icon">!</div>
              <h3>Verification Failed</h3>
              <p>{error}</p>
              <button 
                onClick={requestNewVerification} 
                className="btn btn-secondary btn-full"
              >
                Request New Verification Email
              </button>
              <div className="auth-footer">
                <p>Return to <Link to="/signin">Sign In</Link></p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationPage;