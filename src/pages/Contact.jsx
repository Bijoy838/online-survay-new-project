import React, { useState } from 'react';
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newQuery = {
      id: Date.now(),
      name,
      email,
      message
    };

    const storedQueries = JSON.parse(localStorage.getItem("queries")) || [];
    storedQueries.push(newQuery);
    localStorage.setItem("queries", JSON.stringify(storedQueries));

    alert("Query submitted successfully!");

    // Clear form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container py-5">
      <div className="row">
        {/* Company Info Box */}
        <div className="col-md-6 mb-4">
          <div className="p-4 shadow rounded bg-light h-100">
            <h2 className="mb-3">Company Info</h2>
            <p><strong>Company:</strong> Techno Solutions</p>
            <p><strong>Email:</strong> support@surveyform.com</p>
            <p><strong>Phone:</strong> +880 123 456 789</p>
            <p><strong>Address:</strong> Uttara Sector 10, Dhaka</p>
            <div className="d-flex gap-3 mt-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
            </div>
          </div>
        </div>

        {/* Contact Form Box */}
        <div className="col-md-6 mb-4">
          <div className="p-4 shadow rounded bg-white h-100">
            <h2 className="mb-3">Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Gmail</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="query" className="form-label">Any Query</label>
                <textarea
                  className="form-control"
                  id="query"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
