"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="w-full p-2 mb-4 bg-gray-700 border border-gray-600 rounded"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="w-full p-2 mb-4 bg-gray-700 border border-gray-600 rounded"
        onChange={handleChange}
      />
      <textarea
        name="message"
        placeholder="Your Message"
        className="w-full p-2 mb-4 bg-gray-700 border border-gray-600 rounded"
        rows="5"
        onChange={handleChange}
      />
      <button type="submit" className="btn w-full">
        Send Message
      </button>
    </form>
  );
}
