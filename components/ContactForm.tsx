"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      form.reset();
    } catch (e) {
      setStatus("error");
      setError(e instanceof Error ? e.message : "Unknown error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="border border-black/10 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#035096]/30"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="company" className="text-sm font-medium">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="border border-black/10 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#035096]/30"
        />
      </div>
      <div className="flex flex-col gap-2 md:col-span-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="border border-black/10 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#035096]/30"
        />
      </div>
      <div className="flex flex-col gap-2 md:col-span-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="border border-black/10 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#035096]/30"
        />
      </div>
      <div className="md:col-span-2 flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center rounded-md bg-[#035096] text-white px-6 py-3 hover:opacity-90 transition disabled:opacity-60"
        >
          {status === "submitting" ? "Submitting…" : "Submit"}
        </button>
        {status === "success" && (
          <span className="text-sm text-green-600">Thanks—your message has been sent.</span>
        )}
        {status === "error" && (
          <span className="text-sm text-red-600">{error || "Something went wrong."}</span>
        )}
      </div>
    </form>
  );
}


