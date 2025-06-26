import React from 'react';
import { useState } from "react";
import axios from "axios";

function FeedbackForm() {
  const [data, setData] = useState({
    name: "", email: "", message: "", category: "Suggestion"
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/feedback", data);
    alert("Feedback Submitted!");
    setData({ name: "", email: "", message: "", category: "Suggestion" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" name="name" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
      <input placeholder="Email" name="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
      <textarea placeholder="Message" name="message" value={data.message} onChange={(e) => setData({ ...data, message: e.target.value })} />
      <select name="category" value={data.category} onChange={(e) => setData({ ...data, category: e.target.value })}>
        <option>Suggestion</option>
        <option>Bug</option>
        <option>Feature</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FeedbackForm;
