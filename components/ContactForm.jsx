"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) { setStatus("success"); setForm({ name: "", email: "", message: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  const inputClass =
    "w-full bg-white border border-[#e5e5e5] rounded-xl px-4 py-3 text-[#111] placeholder-[#bbb] text-sm focus:outline-none focus:border-[#ef4d23] transition-colors duration-200";

  return (
    <div className="soft-card p-6 space-y-4">
      <div>
        <label className="text-xs font-medium text-[#555] block mb-1.5">Name</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" className={inputClass} />
      </div>
      <div>
        <label className="text-xs font-medium text-[#555] block mb-1.5">Email</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@email.com" className={inputClass} />
      </div>
      <div>
        <label className="text-xs font-medium text-[#555] block mb-1.5">Message</label>
        <textarea name="message" rows={4} value={form.message} onChange={handleChange} placeholder="Say hello..." className={`${inputClass} resize-none`} />
      </div>

      <button
        onClick={handleSubmit}
        disabled={status === "loading"}
        className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ background: "#111" }}
      >
        {status === "loading" ? "Sending…" : "Send Message →"}
      </button>

      {status === "success" && (
        <p className="text-sm text-center font-medium" style={{ color: "var(--accent)" }}>
          ✓ Message sent! I&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-500 text-sm text-center">
          Something went wrong. Email me at haeldick@gmail.com
        </p>
      )}
    </div>
  );
}
