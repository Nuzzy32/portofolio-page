import { useState, useRef } from 'react'

export default function Contact() {
  const formRef = useRef(null)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError(false)

    const form = formRef.current
    const data = {
      first_name: form.first_name.value,
      last_name: form.last_name.value,
      email: form.user_email.value,
      subject: form.subject.value,
      message: form.message.value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setSending(false)
      setSent(true)
      form.reset()
      setTimeout(() => setSent(false), 4000)
    } catch {
      setSending(false)
      setError(true)
    }
  }

  return (
    <section className="contact">
      <div className="content">
        <h2 className="section-title">
          CONTA<span className="stroke">CT</span>
          <span className="section-title__square"></span>
        </h2>

        <div className="contact__wrapp">
          <div className="contact__info">
            <h3 className="contact__heading">Let's work together</h3>
            <p className="contact__desc">
              Have a project in mind or just want to say hello? Feel free to reach out. I'd love to hear from you.
            </p>
            <div className="contact__details">
              <div className="contact__detail">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                <span>adrianfaishalhilmi@gmail.com</span>
              </div>
              <div className="contact__detail">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Indonesia</span>
              </div>
            </div>
          </div>

          <form className="contact__form" ref={formRef} onSubmit={handleSubmit}>
            <div className="contact__form-row">
              <div className="contact__field">
                <label className="contact__label">First Name</label>
                <input className="contact__input" type="text" name="first_name" required />
              </div>
              <div className="contact__field">
                <label className="contact__label">Last Name</label>
                <input className="contact__input" type="text" name="last_name" required />
              </div>
            </div>
            <div className="contact__field">
              <label className="contact__label">Email</label>
              <input className="contact__input" type="email" name="user_email" required />
            </div>
            <div className="contact__field">
              <label className="contact__label">Subject</label>
              <input className="contact__input" type="text" name="subject" required />
            </div>
            <div className="contact__field">
              <label className="contact__label">Message</label>
              <textarea className="contact__textarea" name="message" rows="5" required />
            </div>
            <button className="contact__btn" type="submit" disabled={sending}>
              {sending ? 'Sending...' : sent ? 'Message Sent!' : 'Send Message'}
            </button>
            {error && <p className="contact__error">Failed to send. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
