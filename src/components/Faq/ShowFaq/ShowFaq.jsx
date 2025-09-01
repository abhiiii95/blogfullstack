'use client';
import { useEffect, useState } from "react";
import "./showFaq.module.scss";

export default function FaqList() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({ category: "", url: "" });
  const [error, setError] = useState("");

  const fetchFaqs = async () => {
    setLoading(true);
    setError("");

    try {
      let query = [];
      if (filters.category) query.push(`category=${encodeURIComponent(filters.category)}`);
      if (filters.url) query.push(`url=${encodeURIComponent(filters.url)}`);
      const qs = query.length ? "?" + query.join("&") : "";

      const res = await fetch(`/api/faq${qs}`, {
        method: "GET"
      });

      const data = await res.json();

      if (res.ok) {
        setFaqs(data.faqs);
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch (err) {
      setError("Failed to fetch FAQs ❌");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFaqs();
  }, []); // load all FAQs initially

  return (
    <div className="faq-list">
      <h2>FAQs</h2>

      {/* Filters */}
      <div className="filters">
        <input
          type="text"
          placeholder="Filter by category"
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
        />
        <input
          type="text"
          placeholder="Filter by URL"
          value={filters.url}
          onChange={(e) => setFilters({ ...filters, url: e.target.value })}
        />
        <button onClick={fetchFaqs}>Search</button>
      </div>

      {loading && <p>Loading FAQs...</p>}
      {error && <p className="error">{error}</p>}

      <ul>
        {faqs.length > 0 ? (
          faqs.map((faq) => (
            <li key={faq._id} className="faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
              <span className="meta">
                Category: {faq.category} | URL: {faq.url}
              </span>
            </li>
          ))
        ) : (
          !loading && <p>No FAQs found.</p>
        )}
      </ul>
    </div>
  );
}
