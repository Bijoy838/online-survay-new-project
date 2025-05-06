import React from 'react';
import { FaRocket, FaShieldAlt, FaClock, FaUsers, FaChartBar } from 'react-icons/fa';
import './About.css';

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-about text-white text-center d-flex align-items-center justify-content-center">
        <div className="container">
          <h1 className="display-4 fw-bold">About Our Survey Platform</h1>
          <p className="lead mt-3">
            We offer a powerful yet simple way to create, distribute, and analyze surveys. Whether you're conducting market research or collecting feedback — our platform makes it easy.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="who-we-are py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="bg-light p-4 rounded shadow">
                <h2 className="fw-bold">Who We Are</h2>
                <p>
                  We are a team of passionate developers, designers, and analysts dedicated to helping you gather valuable insights through surveys. Our mission is to make data collection efficient and impactful.
                </p>
                <p>
                  Our platform combines user-friendly interfaces with powerful analytics tools to give you everything you need in one place.
                </p>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <img src="images/Pulse-survey.webp" alt="Our Team" className="img-fluid rounded shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* Why This Platform Section */}
      <section className="why-platform py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Why This Platform?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <FaRocket size={40} className="text-primary mb-2" />
              <h5 className="fw-semibold">Fast Survey Creation</h5>
              <p>Create surveys in minutes with our intuitive interface.</p>
            </div>
            <div className="col-md-4">
              <FaChartBar size={40} className="text-success mb-2" />
              <h5 className="fw-semibold">Real-Time Analytics</h5>
              <p>See results as they come in, with dynamic charts and stats.</p>
            </div>
            <div className="col-md-4">
              <FaShieldAlt size={40} className="text-danger mb-2" />
              <h5 className="fw-semibold">Data Security</h5>
              <p>Your survey data is encrypted and safely stored.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-5">How It Works</h2>
          <div className="row g-4">
            <div className="col-md-2 offset-md-1">
              <div className="step-box p-4 rounded shadow">
                <FaUsers size={30} className="mb-2 text-info" />
                <p className="fw-semibold">1. Sign Up</p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="step-box p-4 rounded shadow">
                <FaRocket size={30} className="mb-2 text-primary" />
                <p className="fw-semibold">2. Create Survey</p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="step-box p-4 rounded shadow">
                <FaShieldAlt size={30} className="mb-2 text-success" />
                <p className="fw-semibold">3. Share Link</p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="step-box p-4 rounded shadow">
                <FaClock size={30} className="mb-2 text-warning" />
                <p className="fw-semibold">4. Collect Responses</p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="step-box p-4 rounded shadow">
                <FaChartBar size={30} className="mb-2 text-danger" />
                <p className="fw-semibold">5. Analyze Data</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-about text-center text-white py-5">
        <div className="container">
          <h2 className="fw-bold mb-3">Ready to Get Started?</h2>
          <p className="mb-4">Join thousands of users and start collecting valuable insights today.</p>
          <a href="/signup" className="btn btn-light btn-lg">Create Your Free Survey</a>
        </div>
      </section>
    </div>
  );
}

export default About;
