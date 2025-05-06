import React, { useState } from "react";

function UserPanel() {
  const user = JSON.parse(localStorage.getItem("loggedInUser")); // Updated to match the stored key
  const [feedback, setFeedback] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFeedbackSubmit = () => {
    if (feedback.trim() === "") {
      setErrorMessage("Please enter your feedback.");
      setSuccessMessage("");
      return;
    }

    const feedbackData = {
      userId: user?.name,
      feedback,
      submittedAt: new Date(),
    };

    // Get existing feedbacks from localStorage
    const existingFeedbacks = JSON.parse(localStorage.getItem("userFeedbacks")) || [];

    // Add the new feedback to the array
    existingFeedbacks.push(feedbackData);

    // Save the updated feedbacks to localStorage
    localStorage.setItem("userFeedbacks", JSON.stringify(existingFeedbacks));

    setFeedback("");
    setSuccessMessage("Feedback submitted successfully!");
    setErrorMessage("");

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <div className="container py-5">
      <header className="text-center mb-4">
        <h1 className="display-5">Welcome, {user?.name || "User"} 👋</h1>
        <p className="lead text-muted">Your survey dashboard</p>
      </header>

      <div className="row">
        {/* Left Side: User Info */}
        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">Your Info</h5>
            </div>
            <div className="card-body">
              <p><strong>Name:</strong> {user?.name}</p>
              <p><strong>Email:</strong> {user?.email}</p>
              <p><strong>University:</strong> {user?.university}</p>
              <p><strong>Survey Purpose:</strong> {user?.purpose}</p>
              <p><strong>Account Type:</strong> General User</p>
            </div>
          </div>
        </div>

        {/* Right Side: Survey List */}
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-header bg-success text-white">
              <h5 className="mb-0">Your Surveys</h5>
            </div>
            <div className="card-body">
              <div className="survey-item border-bottom pb-3 mb-3">
                <h5>Customer Feedback Survey</h5>
                <p>Status: <span className="text-success">Completed</span></p>
              </div>
              <div className="survey-item border-bottom pb-3 mb-3">
                <h5>Service Satisfaction Survey</h5>
                <p>Status: <span className="text-warning">In Progress</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="row mt-4">
        <div className="col-md-12">
          <div className="card shadow">
            <div className="card-header bg-info text-white">
              <h5 className="mb-0">Submit Your Feedback</h5>
            </div>
            <div className="card-body">
              {successMessage && <div className="alert alert-success">{successMessage}</div>}
              {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

              <textarea
                className="form-control"
                rows="4"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Write your feedback here"
              ></textarea>
              <button className="btn btn-primary mt-3" onClick={handleFeedbackSubmit}>
                Submit Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPanel;
