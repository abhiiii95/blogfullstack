'use client';
import { useState } from "react";
import "./addFaq.module.scss";

export default function AddFaq() {
  const [formData, setFormData] = useState({
    category: "",
    url: "",
    question: "",
    answer: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/faq", {  // 👈 your backend route
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("FAQ saved successfully ✅");
        setFormData({ category: "", url: "", question: "", answer: "" });
      } else {
        setMessage("Error: " + data.error);
      }
    } catch (err) {
      setMessage("Something went wrong ❌");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Add FAQ</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <input
          type="text"
          name="url"
          placeholder="URL"
          value={formData.url}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <input
          type="text"
          name="question"
          placeholder="Question"
          value={formData.question}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <textarea
          name="answer"
          placeholder="Answer"
          value={formData.answer}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
