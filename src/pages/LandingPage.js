import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo">
          <h1>FitnessTrack</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#about">About</a></li>
            <li><Link to="/signin" className="btn btn-outline">Sign In</Link></li>
            <li><Link to="/signup" className="btn btn-primary">Sign Up</Link></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h2>Your Personal Fitness Journey Starts Here</h2>
          <p>Track your workouts, monitor your progress, and achieve your fitness goals with FitnessTrack.</p>
          <Link to="/signup" className="btn btn-primary btn-large">Get Started Free</Link>
        </div>
        <div className="hero-image">
          <img src="/api/placeholder/500/400" alt="Fitness tracking dashboard" />
        </div>
      </section>

      <section id="features" className="features">
        <h2>Features That Power Your Fitness</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Workout Tracking</h3>
            <p>Log your exercises, sets, reps, and weights with ease.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📈</div>
            <h3>Progress Analytics</h3>
            <p>Visualize your improvement over time with detailed charts.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Goal Setting</h3>
            <p>Set and achieve your personal fitness milestones.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔔</div>
            <h3>Reminders</h3>
            <p>Never miss a workout with customizable notifications.</p>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <h2>Simple Pricing for Everyone</h2>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Basic</h3>
            <div className="price">Free</div>
            <ul>
              <li>Basic workout tracking</li>
              <li>Limited progress analytics</li>
              <li>Up to 5 workout plans</li>
            </ul>
            <Link to="/signup" className="btn btn-primary">Start Free</Link>
          </div>
          <div className="pricing-card highlighted">
            <h3>Pro</h3>
            <div className="price">$9.99<span>/month</span></div>
            <ul>
              <li>Advanced workout tracking</li>
              <li>Full progress analytics</li>
              <li>Unlimited workout plans</li>
              <li>Priority support</li>
            </ul>
            <Link to="/signup" className="btn btn-primary">Start 7-Day Trial</Link>
          </div>
          <div className="pricing-card">
            <h3>Team</h3>
            <div className="price">$19.99<span>/month</span></div>
            <ul>
              <li>All Pro features</li>
              <li>Team progress sharing</li>
              <li>Trainer dashboard</li>
              <li>Team challenges</li>
            </ul>
            <Link to="/signup" className="btn btn-primary">Contact Sales</Link>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About FitnessTrack</h2>
        <p>
          FitnessTrack was created by fitness enthusiasts who wanted a better way to track their progress.
          Our mission is to make fitness tracking simple, motivating, and effective for everyone.
        </p>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>FitnessTrack</h2>
            <p>Your fitness journey, simplified.</p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h3>Company</h3>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#blog">Blog</a></li>
              </ul>
            </div>
            <div className="link-group">
              <h3>Legal</h3>
              <ul>
                <li><a href="#terms">Terms</a></li>
                <li><a href="#privacy">Privacy</a></li>
              </ul>
            </div>
            <div className="link-group">
              <h3>Help</h3>
              <ul>
                <li><a href="#support">Support</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 FitnessTrack. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;