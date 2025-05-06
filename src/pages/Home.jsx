import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCheck, FaChartLine, FaMobileAlt } from 'react-icons/fa';
import { FaClipboardList, FaShareAlt, FaChartBar } from 'react-icons/fa';

import './Home.css';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero text-white text-center">
  <div className="container">
    <h1 className="display-3">Welcome to Online Survey Form</h1>
    <p className="lead">Create surveys and collect valuable data effortlessly!</p>
    <Link to="/survey" className="btn btn-light btn-lg">Get Started</Link>
  </div>
</section>



      {/* Features Section */}
      
<section className="features-section py-5">
  <div className="container">
    <h2 className="text-center mb-4">Why Choose Our Survey Form?</h2>
    <div className="row">
      <div className="col-md-4 text-center">
        <FaUserCheck className="feature-icon mb-3" size={50} />
        <h4>User-Friendly</h4>
        <p>Create and share surveys easily with just a few clicks.</p>
      </div>
      <div className="col-md-4 text-center">
        <FaChartLine className="feature-icon mb-3" size={50} />
        <h4>Data Analysis</h4>
        <p>Analyze survey results with interactive charts and graphs.</p>
      </div>
      <div className="col-md-4 text-center">
        <FaMobileAlt className="feature-icon mb-3" size={50} />
        <h4>Responsive</h4>
        <p>Complete your survey on any device, anywhere.</p>
      </div>
    </div>
  </div>
</section>


     {/* How It Works Section */}
<section className="how-it-works py-5">
  <div className="container">
    <h2 className="text-center mb-4">How It Works</h2>
    <div className="row">
      <div className="col-md-4">
        <div className="step-box text-center p-4 mb-4">
          <FaClipboardList className="feature-icon mb-3" size={40} />
          <h4>Step 1: Create a Survey</h4>
          <p>Simply create your own survey using our easy-to-use form builder.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="step-box text-center p-4 mb-4">
          <FaShareAlt className="feature-icon mb-3" size={40} />
          <h4>Step 2: Share the Survey</h4>
          <p>Share the survey link with your audience via email or social media.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="step-box text-center p-4 mb-4">
          <FaChartBar className="feature-icon mb-3" size={40} />
          <h4>Step 3: View Results</h4>
          <p>Track responses in real-time and analyze results with graphs.</p>
        </div>
      </div>
    </div>
  </div>
</section>

  {/* Testimonials Section */}
<section className="testimonials py-5 bg-light">
  <div className="container">
    <h2 className="text-center mb-5 fw-bold">What Our Users Say</h2>
    <div className="row">
      <div className="col-md-6">
        <div className="testimonial-item p-4 text-center">
          <img
            src="images/how-to-be-a-gentleman-a-begginers-guide.png"
            alt="John"
            className="rounded-circle mb-3 testimonial-img"
          />
          <p>"This survey platform is incredibly user-friendly and easy to navigate. We were able to collect and analyze responses quickly!"</p>
          <p className="text-muted">- John Doe, Business Owner</p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="testimonial-item p-4 text-center">
          <img
            src="images/pexels-gustavo-fring-3875675.webp"
            alt="Jane"
            className="rounded-circle mb-3 testimonial-img"
          />
          <p>"I love the design of the surveys! The data analysis feature is amazing and helps me make informed decisions."</p>
          <p className="text-muted">- Jane Smith, Marketing Specialist</p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Call to Action Section */}
      <section className="cta text-center py-5">
        <div className="container">
          <h2 className="fw-bold">Ready to Create Your Survey?</h2>
          <p>Get started today and see the power of survey data!</p>
          <Link to="/survey" className="btn btn-light btn-lg mt-3">Create a Survey</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
