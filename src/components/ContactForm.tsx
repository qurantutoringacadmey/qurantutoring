"use client";

import { useState } from "react";
import { site } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function buildMessage() {
    return (
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone}\n` +
      `Course of Interest: ${form.course || "Not specified"}\n\n` +
      `${form.message}`
    );
  }

  function handleWhatsApp(e: React.MouseEvent) {
    e.preventDefault();
    const text = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/${site.whatsapp}?text=${text}`, "_blank");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", course: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-semibold text-ink">
            Full Name
          </label>
          <input
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            type="text"
            placeholder="Enter your full name"
            className="w-full rounded-xl border border-black/10 bg-cream/40 px-4 py-3 transition focus:border-brand focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand/10"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold text-ink">
            Email Address
          </label>
          <input
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-xl border border-black/10 bg-cream/40 px-4 py-3 transition focus:border-brand focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand/10"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-semibold text-ink">
            Phone / WhatsApp
          </label>
          <input
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            type="tel"
            placeholder="+1 234 567 8900"
            className="w-full rounded-xl border border-black/10 bg-cream/40 px-4 py-3 transition focus:border-brand focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand/10"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold text-ink">
            Course of Interest
          </label>
          <select
            value={form.course}
            onChange={(e) => update("course", e.target.value)}
            className="w-full rounded-xl border border-black/10 bg-cream/40 px-4 py-3 transition focus:border-brand focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand/10"
          >
            <option value="">Select a course</option>
            <option>Basic Qaida</option>
            <option>Quran Reading with Tajweed</option>
            <option>Quran Memorization</option>
            <option>Arabic Language</option>
            <option>Islamic Studies</option>
            <option>Seerah of the Prophet Muhammad (PBUH)</option>
          </select>
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-semibold text-ink">
          Message
        </label>
        <textarea
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          rows={4}
          placeholder="Tell us about your goals, age, and preferred timing..."
          className="w-full rounded-xl border border-black/10 bg-cream/40 px-4 py-3 transition focus:border-brand focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand/10"
        />
      </div>

      {status === "success" && (
        <div className="rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
          Thank you! Your message has been sent. We&rsquo;ll get back to you within 24 hours.
        </div>
      )}
      {status === "error" && (
        <div className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {errorMessage}
        </div>
      )}

      <div className="flex flex-wrap gap-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-full bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
        <button
          type="button"
          onClick={handleWhatsApp}
          className="rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white transition hover:brightness-95"
        >
          Send via WhatsApp
        </button>
      </div>
    </form>
  );
}
