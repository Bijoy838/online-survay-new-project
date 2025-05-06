import React, { useEffect, useState } from "react";
import { FaUsers, FaPoll, FaClipboardList } from "react-icons/fa";

function AdminPanel() {
  const [users, setUsers] = useState([]);
  const [surveys, setSurveys] = useState([]);
  const [queries, setQueries] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]); // Added state for feedback
  const [editingSurveyId, setEditingSurveyId] = useState(null);
  const [newSurveyTitle, setNewSurveyTitle] = useState("");
  const [responseMessage, setResponseMessage] = useState(""); // To handle response input
  const [selectedQuery, setSelectedQuery] = useState(null); // To track which query to respond to

  // Mock localStorage data fetch for demo
  useEffect(() => {
    // Load users from localStorage (you should save them from signup page)
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [
      { id: 1, name: "Alice", email: "alice@example.com" },
      { id: 2, name: "Bob", email: "bob@example.com" },
    ];
    setUsers(storedUsers);

    // Load contact queries
    const storedQueries = JSON.parse(localStorage.getItem("queries")) || [
      { id: 1, name: "John", message: "Need help with survey." },
    ];
    setQueries(storedQueries);

    // Load surveys
    const storedSurveys = JSON.parse(localStorage.getItem("surveys")) || [
      { id: 1, title: "Customer Feedback" },
      { id: 2, title: "Course Review" },
    ];
    setSurveys(storedSurveys);

    // Load user feedbacks
    const storedFeedbacks = JSON.parse(localStorage.getItem("userFeedbacks")) || [];
    setFeedbacks(storedFeedbacks);
  }, []);

  // Delete survey
  const handleDeleteSurvey = (id) => {
    const updated = surveys.filter((s) => s.id !== id);
    setSurveys(updated);
    localStorage.setItem("surveys", JSON.stringify(updated));
  };

  // Edit survey
  const handleEditSurvey = (id, title) => {
    setEditingSurveyId(id);
    setNewSurveyTitle(title);
  };

  // Save edited survey
  const handleSaveSurvey = (id) => {
    const updated = surveys.map((s) =>
      s.id === id ? { ...s, title: newSurveyTitle } : s
    );
    setSurveys(updated);
    localStorage.setItem("surveys", JSON.stringify(updated));
    setEditingSurveyId(null);
    setNewSurveyTitle("");
  };

  // Create new survey
  const handleCreateSurvey = () => {
    const newSurvey = {
      id: surveys.length + 1,
      title: `New Survey ${surveys.length + 1}`,
    };
    const updated = [...surveys, newSurvey];
    setSurveys(updated);
    localStorage.setItem("surveys", JSON.stringify(updated));
  };

  // Handle the response to a query
  const handleResponseChange = (e) => {
    setResponseMessage(e.target.value);
  };

  // Simulate sending an email (saving response in localStorage for now)
  const handleSendResponse = () => {
    if (responseMessage && selectedQuery) {
      const updatedQueries = queries.map((query) =>
        query.id === selectedQuery.id
          ? { ...query, response: responseMessage, responded: true }
          : query
      );
      setQueries(updatedQueries);
      localStorage.setItem("queries", JSON.stringify(updatedQueries));

      // Clear the response input after sending
      setResponseMessage("");
      setSelectedQuery(null);
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Admin Dashboard</h1>

      {/* Summary Cards */}
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card text-white bg-primary mb-3">
            <div className="card-body">
              <h5 className="card-title">
                <FaUsers className="me-2" /> Total Users
              </h5>
              <p className="card-text fs-4">{users.length}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-success mb-3">
            <div className="card-body">
              <h5 className="card-title">
                <FaPoll className="me-2" /> Total Surveys
              </h5>
              <p className="card-text fs-4">{surveys.length}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-warning mb-3">
            <div className="card-body">
              <h5 className="card-title">
                <FaClipboardList className="me-2" /> Contact Queries
              </h5>
              <p className="card-text fs-4">{queries.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="mb-5">
        <h3 className="mb-3">Manage Users</h3>
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Contact Queries */}
      <div>
        <h3 className="mb-3">User Queries</h3>
        <ul className="list-group">
          {queries.map((query) => (
            <li className="list-group-item" key={query.id}>
              <strong>{query.name}:</strong> {query.message}
              {query.response && (
                <div className="mt-2">
                  <strong>Response: </strong>
                  <p>{query.response}</p>
                </div>
              )}
              <div className="d-flex justify-content-end mt-3">
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => {
                    setSelectedQuery(query);
                    setResponseMessage(query.response || "");
                  }}
                >
                  Respond
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Admin Response Form */}
      {selectedQuery && (
        <div className="mt-4">
          <h4>Respond to Query from {selectedQuery.name}</h4>
          <textarea
            className="form-control"
            rows="4"
            value={responseMessage}
            onChange={handleResponseChange}
          ></textarea>
          <button className="btn btn-success mt-3" onClick={handleSendResponse}>
            Send Response
          </button>
        </div>
      )}

      {/* Surveys Table */}
      <div className="mb-5">
        <h3 className="mb-3">Manage Surveys</h3>
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {surveys.map((survey) => (
              <tr key={survey.id}>
                <td>{survey.id}</td>
                <td>{survey.title}</td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDeleteSurvey(survey.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-success" onClick={handleCreateSurvey}>
          Create New Survey
        </button>
      </div>

      {/* User Feedbacks */}
      <div className="mt-5">
        <h3 className="mb-3">User Feedbacks</h3>
        <ul className="list-group">
          {feedbacks.length === 0 ? (
            <li className="list-group-item">No feedback submitted yet.</li>
          ) : (
            feedbacks.map((feedback) => (
              <li className="list-group-item" key={feedback.id}>
                <strong>{feedback.userId}:</strong> {feedback.feedback}
                <br />
                <small>Submitted on: {new Date(feedback.submittedAt).toLocaleString()}</small>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default AdminPanel;
