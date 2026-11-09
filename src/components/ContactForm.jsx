"use client";
import { useState, useRef } from "react";
import { ArrowUpRight, Loader2, CheckCircle2 } from "lucide-react";
import { services, company } from "@/data/company";
export default function ContactForm({ initialService = "" }) {
  const [status, setStatus] = useState({ kind: "idle", message: "" });
  const pending = useRef(false);
  async function submit(e) {
    e.preventDefault();
    if (pending.current) return;
    pending.current = true;
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus({ kind: "sending", message: "" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        signal: AbortSignal.timeout(45000),
      });
      const result = await response.json();
      if (!response.ok)
        throw new Error(
          result.message || "We couldn’t send your message. Please try again.",
        );
      setStatus({ kind: "success", message: result.message });
      form.reset();
    } catch (error) {
      setStatus({
        kind: "error",
        message:
          error.name === "TimeoutError"
            ? "The request timed out. Delivery could not be confirmed. Please email our team before submitting again."
            : error.message === "Failed to fetch"
              ? "Connection interrupted. Delivery could not be confirmed. Please check with our team before trying again."
              : error.message,
      });
    } finally {
      pending.current = false;
    }
  }
  return (
    <form
      onSubmit={submit}
      className="contact-form"
      aria-busy={status.kind === "sending"}
    >
      <div className="form-honeypot" aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <h2>Tell us what you’re thinking.</h2>
      <p>A little context helps us make our first conversation useful.</p>
      <div className="form-grid">
        <label className="field">
          Your name *
          <input
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            placeholder="Full name"
          />
        </label>
        <label className="field">
          Work email *
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={200}
            placeholder="you@company.com"
          />
        </label>
        <label className="field">
          Company
          <input
            name="company"
            autoComplete="organization"
            maxLength={150}
            placeholder="Company name"
          />
        </label>
        <label className="field">
          Phone
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={40}
            placeholder="Include country code"
          />
        </label>
      </div>
      <label className="field">
        I’m interested in *
        <select name="service" required defaultValue={initialService}>
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.id} value={s.id}>
              {s.title}
            </option>
          ))}
          <option value="other">Something else / help me decide</option>
        </select>
      </label>
      <label className="field">
        About your project *
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={5000}
          placeholder="What would you like to build or improve? Tell us about your goals, timeline, and requirements."
        />
      </label>
      <button
        className="button"
        type="submit"
        disabled={status.kind === "sending"}
      >
        {status.kind === "sending" ? (
          <>
            <Loader2 size={18} className="sending-spinner" />
            Sending your inquiry…
          </>
        ) : (
          <>
            Send inquiry <ArrowUpRight size={18} />
          </>
        )}
      </button>
      <p className="form-note">
        Your inquiry is sent to our team at{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a>. We use your
        details to respond to your request.
      </p>
      {status.message && (
        <div
          className={`form-status form-status-${status.kind}`}
          role={status.kind === "error" ? "alert" : "status"}
        >
          {status.kind === "success" && <CheckCircle2 size={19} />}
          <span>{status.message}</span>
        </div>
      )}
    </form>
  );
}
