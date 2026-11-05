import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import emailjs from "@emailjs/browser";

const services = [
  "Software Engineering",
  "Web Application Development",
  "Backend & API Development",
  "UI/UX & Digital Experiences",
  "Artificial Intelligence & Machine Learning",
  "Data Analytics",
  "Intelligent Automation",
  "Technical Consultation",
  "Other",
];

const initialForm = {
  from_name: "",
  company: "",
  from_email: "",
  phone: "",
  service: "",
  budget: "",
  timeline: "",
  message: "",
};

export default function CollaborationCTA() {
  const reduce = useReducedMotion();
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const updateField = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  
const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    setStatus("error");
    return;
  }

  setStatus("sending");

  try {
    await emailjs.send(serviceId, templateId, form, publicKey);
    setStatus("success");
    setForm(initialForm);
  } catch (error) {
    console.error("EmailJS submission failed:", error);
    setStatus("error");
  }
};
  return (
    <section id="contact" className="section container collaboration-section">
      <motion.div
        className="cta-panel collaboration-panel"
        initial={reduce ? false : { opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="collaboration-heading">
          <span className="eyebrow">START A CONVERSATION</span>
          <h2>
            Have an idea worth <span className="accent-text">building?</span>
          </h2>
          <p>
            Tell us about your vision. Share your requirements with our team
            and let's explore how we can turn your idea into reality.
          </p>
        </div>

        <form className="enquiry-form" onSubmit={handleSubmit}>
          <div className="enquiry-grid">
            <label className="enquiry-field">
              <span>Full name <b>*</b></span>
              <input
                name="from_name"
                value={form.from_name}
                onChange={updateField}
                placeholder="Your full name"
                autoComplete="name"
                required
              />
            </label>

            <label className="enquiry-field">
              <span>Company / Organisation</span>
              <input
                name="company"
                value={form.company}
                onChange={updateField}
                placeholder="Your company name"
                autoComplete="organization"
              />
            </label>

            <label className="enquiry-field">
              <span>Email address <b>*</b></span>
              <input
                type="email"
                name="from_email"
                value={form.from_email}
                onChange={updateField}
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </label>

            <label className="enquiry-field">
              <span>Contact number</span>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={updateField}
                placeholder="+91 00000 00000"
                autoComplete="tel"
              />
            </label>

            <label className="enquiry-field">
              <span>Service required <b>*</b></span>
              <select
                name="service"
                value={form.service}
                onChange={updateField}
                required
              >
                <option value="">Choose a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </label>

            <label className="enquiry-field">
              <span>Estimated budget</span>
              <select
                name="budget"
                value={form.budget}
                onChange={updateField}
              >
                <option value="">Select a budget</option>
                <option>Below ₹25,000</option>
                <option>₹25,000 – ₹50,000</option>
                <option>₹50,000 – ₹1,00,000</option>
                <option>₹1,00,000 – ₹3,00,000</option>
                <option>Above ₹3,00,000</option>
                <option>To be discussed</option>
              </select>
            </label>

            <label className="enquiry-field enquiry-full">
              <span>Expected timeline</span>
              <select
                name="timeline"
                value={form.timeline}
                onChange={updateField}
              >
                <option value="">When would you like to begin?</option>
                <option>Immediately</option>
                <option>Within 2–4 weeks</option>
                <option>Within 1–3 months</option>
                <option>More than 3 months</option>
                <option>Just exploring options</option>
              </select>
            </label>

            <label className="enquiry-field enquiry-full">
              <span>Project description <b>*</b></span>
              <textarea
                name="message"
                value={form.message}
                onChange={updateField}
                placeholder="Tell us about your idea, objectives and requirements..."
                rows={5}
                required
              />
            </label>
          </div>

          <div className="enquiry-submit-row">
            <p className="enquiry-note">
              Your information will only be used to respond to your enquiry.
            </p>
            <button
              type="submit"
              className="btn btn-primary enquiry-submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Enquiry"}
              <span aria-hidden="true"> ↗</span>
            </button>
          </div>

          {status === "success" && (
            <p className="form-feedback form-success" role="status">
              Thank you for contacting WEBNITY. Your enquiry has been sent
              successfully. Our team will be in touch with you.
            </p>
          )}

          {status === "error" && (
            <p className="form-feedback form-error" role="alert">
              We couldn't send your enquiry. Please check the email
              configuration or try again later.
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
}

