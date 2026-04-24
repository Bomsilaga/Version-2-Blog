"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  projectType: z.enum([
    "New build",
    "Extension",
    "Renovation",
    "Commercial",
    "Not sure yet",
  ] as const),
  suburb: z.string().min(2, "Please enter your project suburb"),
  message: z.string().min(20, "Please tell us a bit more about your project"),
  // Honeypot — must be empty
  website: z.string().max(0, "").optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const projectTypes = [
  "New build",
  "Extension",
  "Renovation",
  "Commercial",
  "Not sure yet",
] as const;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Silently ignore honeypot submissions
    if (data.website) return;

    setSubmitting(true);
    // Phase 2 will wire this to Supabase + Resend
    console.log("Contact form submission:", data);

    // Simulate async (remove when real handler is wired)
    await new Promise((r) => setTimeout(r, 800));

    setSubmitting(false);
    setSubmitted(true);
    reset();
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 px-6 lg:px-8"
      aria-label="Contact us"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <p className="font-sans text-sm uppercase tracking-widest text-terracotta mb-4">
              Get in Touch
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal mb-6 text-balance">
              Let&rsquo;s talk about your project.
            </h2>
            <p className="font-sans text-base text-warm-muted leading-relaxed mb-10">
              Whether you need a quick estimate or you&rsquo;re looking for
              longer-term project support, the first step is a conversation.
              We&rsquo;ll come back to you within one business day.
            </p>

            <div className="space-y-6">
              <a
                href="tel:+61000000000"
                className="flex items-center gap-4 group"
                aria-label="Call us"
              >
                <div className="w-10 h-10 rounded-sm bg-cream-dark flex items-center justify-center group-hover:bg-terracotta/10 transition-colors">
                  <Phone
                    size={16}
                    className="text-terracotta"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p className="font-sans text-xs text-warm-muted uppercase tracking-wider mb-0.5">
                    Phone
                  </p>
                  <p className="font-sans text-sm font-medium text-charcoal group-hover:text-terracotta transition-colors">
                    [Add phone number]
                  </p>
                </div>
              </a>

              <a
                href="mailto:info@ongroundpm.com.au"
                className="flex items-center gap-4 group"
                aria-label="Email us"
              >
                <div className="w-10 h-10 rounded-sm bg-cream-dark flex items-center justify-center group-hover:bg-terracotta/10 transition-colors">
                  <Mail
                    size={16}
                    className="text-terracotta"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p className="font-sans text-xs text-warm-muted uppercase tracking-wider mb-0.5">
                    Email
                  </p>
                  <p className="font-sans text-sm font-medium text-charcoal group-hover:text-terracotta transition-colors">
                    info@ongroundpm.com.au
                  </p>
                </div>
              </a>
            </div>

            <div className="mt-10 pt-10 border-t border-border">
              <p className="font-sans text-xs text-warm-muted leading-relaxed">
                We respond within one business day. For urgent enquiries,
                call directly. All information you share is kept confidential
                and used only to respond to your enquiry.
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-start justify-center gap-6 py-16 px-10 bg-cream-dark border border-border rounded-sm">
                <CheckCircle
                  size={40}
                  className="text-terracotta"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-serif text-2xl font-bold text-charcoal mb-3">
                    Message received.
                  </h3>
                  <p className="font-sans text-base text-warm-muted leading-relaxed max-w-md">
                    Thanks for reaching out. We&rsquo;ll come back to you
                    within one business day. In the meantime, feel free to
                    send any drawings or project documents to{" "}
                    <a
                      href="mailto:info@ongroundpm.com.au"
                      className="text-terracotta hover:underline"
                    >
                      info@ongroundpm.com.au
                    </a>
                    .
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="font-sans text-sm text-warm-muted hover:text-charcoal underline underline-offset-4 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 bg-cream-dark border border-border rounded-sm p-8 lg:p-10"
                noValidate
                aria-label="Contact form"
              >
                {/* Honeypot field — hidden from humans */}
                <div className="hidden" aria-hidden="true">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    {...register("website")}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="font-sans text-sm font-medium text-charcoal"
                    >
                      Full name <span className="text-terracotta">*</span>
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      autoComplete="name"
                      aria-required="true"
                      aria-describedby={errors.name ? "name-error" : undefined}
                      {...register("name")}
                      className={`font-sans text-sm bg-cream border-border focus:border-terracotta focus:ring-terracotta/20 ${
                        errors.name ? "border-destructive" : ""
                      }`}
                    />
                    {errors.name && (
                      <p
                        id="name-error"
                        className="font-sans text-xs text-destructive"
                        role="alert"
                      >
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="font-sans text-sm font-medium text-charcoal"
                    >
                      Email <span className="text-terracotta">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      aria-required="true"
                      aria-describedby={errors.email ? "email-error" : undefined}
                      {...register("email")}
                      className={`font-sans text-sm bg-cream border-border focus:border-terracotta focus:ring-terracotta/20 ${
                        errors.email ? "border-destructive" : ""
                      }`}
                    />
                    {errors.email && (
                      <p
                        id="email-error"
                        className="font-sans text-xs text-destructive"
                        role="alert"
                      >
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="font-sans text-sm font-medium text-charcoal"
                    >
                      Phone{" "}
                      <span className="text-warm-muted font-normal">
                        (optional)
                      </span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="04xx xxx xxx"
                      autoComplete="tel"
                      {...register("phone")}
                      className="font-sans text-sm bg-cream border-border focus:border-terracotta focus:ring-terracotta/20"
                    />
                  </div>

                  {/* Project suburb */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="suburb"
                      className="font-sans text-sm font-medium text-charcoal"
                    >
                      Project suburb <span className="text-terracotta">*</span>
                    </Label>
                    <Input
                      id="suburb"
                      type="text"
                      placeholder="e.g. Tarneit"
                      aria-required="true"
                      aria-describedby={errors.suburb ? "suburb-error" : undefined}
                      {...register("suburb")}
                      className={`font-sans text-sm bg-cream border-border focus:border-terracotta focus:ring-terracotta/20 ${
                        errors.suburb ? "border-destructive" : ""
                      }`}
                    />
                    {errors.suburb && (
                      <p
                        id="suburb-error"
                        className="font-sans text-xs text-destructive"
                        role="alert"
                      >
                        {errors.suburb.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Project type */}
                <div className="space-y-2">
                  <Label
                    htmlFor="projectType"
                    className="font-sans text-sm font-medium text-charcoal"
                  >
                    Project type <span className="text-terracotta">*</span>
                  </Label>
                  <select
                    id="projectType"
                    aria-required="true"
                    aria-describedby={errors.projectType ? "type-error" : undefined}
                    {...register("projectType")}
                    className={`w-full h-10 rounded-md border px-3 py-2 font-sans text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-terracotta/20 focus:border-terracotta transition-colors ${
                      errors.projectType ? "border-destructive" : "border-border"
                    }`}
                  >
                    <option value="">Select a type...</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p
                      id="type-error"
                      className="font-sans text-xs text-destructive"
                      role="alert"
                    >
                      {errors.projectType.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="font-sans text-sm font-medium text-charcoal"
                  >
                    Tell us about your project{" "}
                    <span className="text-terracotta">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="What are you building, renovating, or managing? What do you need help with?"
                    aria-required="true"
                    aria-describedby={errors.message ? "message-error" : undefined}
                    {...register("message")}
                    className={`font-sans text-sm bg-cream border-border focus:border-terracotta focus:ring-terracotta/20 resize-none ${
                      errors.message ? "border-destructive" : ""
                    }`}
                  />
                  {errors.message && (
                    <p
                      id="message-error"
                      className="font-sans text-xs text-destructive"
                      role="alert"
                    >
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                  <p className="font-sans text-xs text-warm-muted">
                    We reply within one business day. Your information is kept
                    confidential.
                  </p>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center px-8 py-3.5 bg-terracotta text-cream text-sm font-sans font-medium rounded-sm hover:bg-terracotta-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed tracking-wide flex-shrink-0"
                    aria-busy={submitting}
                  >
                    {submitting ? "Sending…" : "Send Message"}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
