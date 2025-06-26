import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";

function FeedbackDashboard() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/feedback", {
      params: { category, sortBy: "date" }
    }).then(res => setFeedbacks(res.data));
  }, [category]);

 return (
  <div style={{ maxWidth: "800px", margin: "20px auto" }}>
    <h2>Feedback Dashboard</h2>

    <div style={{ marginBottom: "20px", textAlign: "center" }}>
      <label style={{ fontWeight: "bold", marginRight: "10px" }}>Filter by Category:</label>
      <select onChange={(e) => setCategory(e.target.value)} style={{ padding: "10px", borderRadius: "6px" }}>
        <option value="">All</option>
        <option value="Bug">Bug</option>
        <option value="Feature">Feature</option>
        <option value="Suggestion">Suggestion</option>
      </select>
    </div>

    <ul style={{ listStyle: "none", padding: 0 }}>
      {feedbacks.map(f => (
        <li key={f._id} style={{
          background: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          marginBottom: "15px",
          padding: "15px"
        }}>
          <h3 style={{ margin: "0 0 5px" }}>{f.name} <span style={{ color: "#6b7280", fontSize: "14px" }}>({f.category})</span></h3>
          <p style={{ margin: "8px 0" }}>{f.message}</p>
          <small style={{ color: "#6b7280" }}>{new Date(f.createdAt).toLocaleString()}</small>
        </li>
      ))}
    </ul>
  </div>
);

}

export default FeedbackDashboard;
