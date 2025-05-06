import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Survey = () => {
  const [surveys, setSurveys] = useState([]);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    // Simulated fetch for available surveys
    setSurveys([
      {
        id: 1,
        title: "Customer Satisfaction Survey",
        description: "Help us improve our services by sharing your experience.",
        status: "Open",
      },
      {
        id: 2,
        title: "University Feedback",
        description: "Tell us how we can enhance your academic journey.",
        status: "Open",
      },
      {
        id: 3,
        title: "Event Participation Feedback",
        description: "Share your thoughts about our recent event.",
        status: "Open",
      },
    ]);
  }, []);

  const handleTakeSurvey = (id) => {
    alert(`You selected the survey with ID ${id}`);
    // navigate(`/survey/${id}`); // Optional: implement dynamic survey page
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5 p-4 rounded" style={{ backgroundColor: "#f0f8ff" }}>
        <h1 className="display-5 fw-bold text-primary">Survey Center</h1>
        <p className="lead text-muted">
          {user
            ? "Select a survey below and let your voice be heard."
            : "Please login or sign up to participate in surveys."}
        </p>
      </div>

      <div className="row">
        {surveys.map((survey) => (
          <div className="col-md-4 mb-4" key={survey.id}>
            <div className="card shadow h-100 border-0">
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title text-dark">{survey.title}</h5>
                  <p className="card-text text-secondary">
                    {survey.description}
                  </p>
                  <span className="badge bg-success mb-3">{survey.status}</span>
                </div>
                {user ? (
                  <button
                    className="btn btn-primary w-100"
                    onClick={() => handleTakeSurvey(survey.id)}
                  >
                    Take Survey
                  </button>
                ) : (
                  <button
                    className="btn btn-outline-secondary w-100"
                    onClick={() => navigate("/login")}
                  >
                    Login to Take Survey
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {user && (
        <div className="text-center mt-5 p-4 rounded" style={{ backgroundColor: "#f8f9fa" }}>
          <h4>Want to suggest a new topic?</h4>
          <button className="btn btn-outline-primary mt-3">
            Request New Survey
          </button>
        </div>
      )}
    </div>
  );
};

export default Survey;
