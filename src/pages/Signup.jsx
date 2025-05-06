import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [purpose, setPurpose] = useState("");
  const [email, setEmail] = useState("");
  const [university, setUniversity] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name || !purpose || !email || !university || !password) {
      setError("All fields are required.");
      setSuccess("");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check for duplicate email
    const emailExists = existingUsers.some((user) => user.email === email);
    if (emailExists) {
      setError("Email already registered. Please use a different email.");
      setSuccess("");
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      purpose,
      email,
      university,
      password,
    };

    localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));
    setSuccess("Signup successful!");
    setError("");

    // Reset form
    setName("");
    setPurpose("");
    setEmail("");
    setUniversity("");
    setPassword("");

    setTimeout(() => {
      navigate("/user");
    }, 1500);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-7">
          <div className="card shadow-lg border-0">
            <div className="card-header text-white bg-primary text-center">
              <h3 className="mb-0">Create Your Account</h3>
            </div>
            <div className="card-body">
              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}

              <form onSubmit={handleSignup}>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Purpose of Survey</label>
                  <select
                    className="form-select"
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                    required
                  >
                    <option value="">-- Select Purpose --</option>
                    <option value="Academic">Academic</option>
                    <option value="Business">Business</option>
                    <option value="Local">Local</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Gmail Address</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ex: example@gmail.com"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">University Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={university}
                    onChange={(e) => setUniversity(e.target.value)}
                    placeholder="Enter university name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create a strong password"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Sign Up
                </button>
              </form>
            </div>
            <div className="card-footer text-center">
              Already have an account? <a href="/login">Login here</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
