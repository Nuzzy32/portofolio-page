const services = [
  { name: '/Graphic Design', speed: 500 },
  { name: '/UX/UI Design', speed: 400 },
  { name: '/Web Design', speed: 800 },
  { name: '/Brend Design', speed: 600 },
]

const regularFeatures = [
  { text: '5x Revisi Design', included: true },
  { text: 'Desain Responsif (Mobile & Desktop)', included: true },
  { text: 'Source File (Figma/PSD)', included: true },
  { text: 'Delivery 3-5 Hari Kerja', included: true },
  { text: 'Support via Chat', included: true },
  { text: 'Custom Animation & Interaction', included: false },
  { text: 'Priority Support 24/7', included: false },
]

const proFeatures = [
  { text: 'Unlimited Revisi Design', included: true },
  { text: 'Desain Responsif (Mobile & Desktop)', included: true },
  { text: 'Source File (Figma/PSD)', included: true },
  { text: 'Delivery 1-3 Hari Kerja', included: true },
  { text: 'Custom Animation & Interaction', included: true },
  { text: 'Priority Support 24/7', included: true },
  { text: 'SEO & Performance Optimization', included: true },
]

function CheckIcon({ included }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={included ? '#4ade80' : '#4b4b4b'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function Services() {
  return (
    <section className="serv">
      <div className="content">
        <h2 className="section-title">
          servic<span className="stroke">es</span>
          <span className="section-title__square"></span>
        </h2>
        <div className="serv__list">
          {services.map((s) => (
            <div key={s.name} className="serv__item">
              <span className="serv__item-arrow" data-speed={s.speed}>
                <img src="/img/arrow.svg" alt="" />
              </span>
              <div className="serv__item-txt">
                <span className="serv__item-text">{s.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="pricing">
          <h2 className="section-title" style={{ marginTop: '100px' }}>
            PRIC<span className="stroke">ING</span>
            <span className="section-title__square"></span>
          </h2>
          <div className="pricing__grid">
            {/* Regular Plan */}
            <div className="pricing__card">
              <div className="pricing__header">
                <span className="pricing__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
                  </svg>
                </span>
                <h3 className="pricing__name">Regular</h3>
                <p className="pricing__desc"></p>
              </div>
              <div className="pricing__price">
                <span className="pricing__amount">Rp 0</span>
                <span className="pricing__period">/project</span>
              </div>
              <ul className="pricing__features">
                {regularFeatures.map((f) => (
                  <li key={f.text} className={`pricing__feature ${!f.included ? 'pricing__feature--disabled' : ''}`}>
                    <CheckIcon included={f.included} />
                    <span>{f.text}</span>
                  </li>
                ))}
              </ul>
              <button
                className="pricing__btn"
                onClick={() => document.querySelector('.contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Professional Plan */}
            <div className="pricing__card pricing__card--pro">
              <div className="pricing__badge">Most Popular</div>
              <div className="pricing__header">
                <span className="pricing__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </span>
                <h3 className="pricing__name">Professional</h3>
                <p className="pricing__desc"></p>
              </div>
              <div className="pricing__price">
                <span className="pricing__amount">Rp 0</span>
                <span className="pricing__period">/project</span>
              </div>
              <ul className="pricing__features">
                {proFeatures.map((f) => (
                  <li key={f.text} className={`pricing__feature ${!f.included ? 'pricing__feature--disabled' : ''}`}>
                    <CheckIcon included={f.included} />
                    <span>{f.text}</span>
                  </li>
                ))}
              </ul>
              <button
                className="pricing__btn pricing__btn--pro"
                onClick={() => document.querySelector('.contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
