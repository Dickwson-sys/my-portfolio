"use client";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mppzrlob");

  const inputClass =
    "w-full bg-white border border-[#e5e5e5] rounded-xl px-4 py-3 text-[#111] placeholder-[#bbb] text-sm focus:outline-none focus:border-[#ef4d23] transition-colors duration-200";

  if (state.succeeded) {
    return (
      <div className="soft-card p-6 flex flex-col items-center justify-center gap-3 min-h-[260px] text-center">
        <span className="text-3xl">✓</span>
        <p className="font-semibold text-[#111]">Message sent!</p>
        <p className="text-sm text-[#777]">
          Thanks for reaching out — I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="soft-card p-6 space-y-4">
      <div>
        <label htmlFor="name" className="text-xs font-medium text-[#555] block mb-1.5">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Your name"
          required
          className={inputClass}
        />
        <ValidationError prefix="Name" field="name" errors={state.errors}
          className="text-red-500 text-xs mt-1" />
      </div>

      <div>
        <label htmlFor="email" className="text-xs font-medium text-[#555] block mb-1.5">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="you@email.com"
          required
          className={inputClass}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors}
          className="text-red-500 text-xs mt-1" />
      </div>

      <div>
        <label htmlFor="message" className="text-xs font-medium text-[#555] block mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Say hello..."
          required
          className={`${inputClass} resize-none`}
        />
        <ValidationError prefix="Message" field="message" errors={state.errors}
          className="text-red-500 text-xs mt-1" />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state.submitting ? "Sending…" : "Send Message →"}
      </button>

      <ValidationError errors={state.errors} className="text-red-500 text-xs text-center" />
    </form>
  );
}
