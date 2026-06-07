"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
      <div>
        <label className="text-sm text-gray-400 block mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.07] transition-all duration-200"
        />
      </div>
      <div>
        <label className="text-sm text-gray-400 block mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@email.com"
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.07] transition-all duration-200"
        />
      </div>
      <div>
        <label className="text-sm text-gray-400 block mb-1">Message</label>
        <textarea
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Say hello..."
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.07] transition-all duration-200 resize-none"
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={status === "loading"}
        className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-90 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] text-black font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Send Message ✈️"}
      </button>

      {status === "success" && (
        <p className="text-cyan-400 text-sm text-center">
          ✅ Message sent! I&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm text-center">
          ❌ Something went wrong. Try emailing me directly at haeldick@gmail.com
        </p>
      )}
    </div>
  );
}