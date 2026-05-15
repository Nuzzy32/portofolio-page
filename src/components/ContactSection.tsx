import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import type { ChangeEvent, FormEvent } from 'react';
import FadeIn from './FadeIn';
import { personal, contactTagline } from '../data';

function Field({
  label,
  name,
  value,
  onChange,
  type = 'text',
}: {
  label: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium uppercase tracking-[0.35em] text-[#D7E2EA]/60">{label}</span>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        required
        placeholder={label}
        className="mt-3 w-full rounded-full border border-[#D7E2EA]/25 bg-white/[0.03] px-5 py-4 text-base font-light text-[#D7E2EA] outline-none transition placeholder:text-[#D7E2EA]/35 focus:border-[#D7E2EA]"
      />
    </label>
  );
}

export default function ContactSection() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: form.firstName,
          last_name: form.lastName,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      if (!response.ok) throw new Error('Failed to send contact form');

      setStatus('sent');
      setForm({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="relative -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 text-[#D7E2EA] sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <FadeIn y={40}>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.45em] text-[#D7E2EA]/60">Contact</p>
          <h2 className="hero-heading text-[clamp(3rem,11vw,150px)] font-black uppercase leading-none tracking-tight">
            Let&apos;s work together
          </h2>
          <p className="mt-8 max-w-xl text-[clamp(1rem,2vw,1.35rem)] font-light leading-relaxed text-[#D7E2EA]/80">
            {contactTagline}
          </p>

          <div className="mt-10 space-y-4 text-lg font-light">
            <a href={`mailto:${personal.email}`} className="flex items-center gap-3 transition hover:opacity-70">
              <Mail className="h-5 w-5" />
              {personal.email}
            </a>
            <p className="flex items-center gap-3">
              <MapPin className="h-5 w-5" />
              {personal.location}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.12} y={40}>
          <form onSubmit={handleSubmit} className="rounded-[36px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:rounded-[52px] md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="First Name" name="firstName" value={form.firstName} onChange={handleChange} />
              <Field label="Last Name" name="lastName" value={form.lastName} onChange={handleChange} />
              <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} />
              <Field label="Subject" name="subject" value={form.subject} onChange={handleChange} />
            </div>
            <label className="mt-4 block">
              <span className="text-xs font-medium uppercase tracking-[0.35em] text-[#D7E2EA]/60">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell me about your project"
                className="mt-3 w-full resize-y rounded-[28px] border border-[#D7E2EA]/25 bg-white/[0.03] px-5 py-4 text-base font-light text-[#D7E2EA] outline-none transition placeholder:text-[#D7E2EA]/35 focus:border-[#D7E2EA]"
              />
            </label>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="contact-button inline-flex items-center gap-3 rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white transition duration-200 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base"
              >
                {status === 'sending' ? 'Sending' : 'Send Message'}
                <Send className="h-4 w-4" />
              </button>
              <p className="min-h-5 text-xs font-light uppercase tracking-[0.28em] text-[#D7E2EA]/65">
                {status === 'sent' ? 'Message sent.' : null}
                {status === 'error' ? 'Could not reach /api/contact.' : null}
              </p>
            </div>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
