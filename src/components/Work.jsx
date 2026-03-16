import { useState, useEffect } from 'react'

const projects = [
  {
    title: 'RISKALA Lite',
    subtitle: 'A full-stack mobile application focused on monitoring employee mental health.',
    fullDescription: 'Developed RISKALA Lite, a full-stack mobile application (Flutter, Laravel, MySQL) focused on monitoring employee mental health. Engineered structured self-assessment tools (Likert-scale questionnaires) and an HR Admin Dashboard for real-time analytics, seamlessly integrated with an accessible, psychology-driven UI/UX design.',
    img: '/img/riskala.png',
    gradient: 'linear-gradient(145deg, #3B82F6, #000)',
    borderColor: '#3B82F6',
    url: 'https://github.com/Nuzzy32/riskala_lite2',
  },
  {
    title: 'Coming Soon',
    subtitle: 'New project in development. Stay tuned for updates.',
    fullDescription: 'This project is currently in development. Stay tuned for exciting updates coming soon!',
    img: '/img/ryan-gosling.JPG',
    gradient: 'linear-gradient(180deg, #10B981, #000)',
    borderColor: '#10B981',
    url: '#',
  },
  {
    title: 'Coming Soon',
    subtitle: 'New project in development. Stay tuned for updates.',
    fullDescription: 'This project is currently in development. Stay tuned for exciting updates coming soon!',
    img: '/img/ryan-gosling.JPG',
    gradient: 'linear-gradient(145deg, #8B5CF6, #000)',
    borderColor: '#8B5CF6',
    url: '#',
  },
  {
    title: 'Coming Soon',
    subtitle: 'New project in development. Stay tuned for updates.',
    fullDescription: 'This project is currently in development. Stay tuned for exciting updates coming soon!',
    img: '/img/ryan-gosling.JPG',
    gradient: 'linear-gradient(180deg, #F59E0B, #000)',
    borderColor: '#F59E0B',
    url: '#',
  },
  {
    title: 'Coming Soon',
    subtitle: 'New project in development. Stay tuned for updates.',
    fullDescription: 'This project is currently in development. Stay tuned for exciting updates coming soon!',
    img: '/img/ryan-gosling.JPG',
    gradient: 'linear-gradient(145deg, #EF4444, #000)',
    borderColor: '#EF4444',
    url: '#',
  },
  {
    title: 'Coming Soon',
    subtitle: 'New project in development. Stay tuned for updates.',
    fullDescription: 'This project is currently in development. Stay tuned for exciting updates coming soon!',
    img: '/img/ryan-gosling.JPG',
    gradient: 'linear-gradient(180deg, #06B6D4, #000)',
    borderColor: '#06B6D4',
    url: '#',
  },
]

function ProjectModal({ project, onClose }) {
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = 'auto' }
  }, [])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      onClose()
      setIsClosing(false)
    }, 300)
  }

  return (
    <div className="modal__overlay" onClick={handleClose}>
      <div
        className={`modal__content ${isClosing ? 'modal--out' : 'modal--in'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={project.img} alt={project.title} className="modal__img" />
        <div className="modal__body">
          <div className="modal__header">
            <h2 className="modal__title">{project.title}</h2>
            <button className="modal__close" onClick={handleClose}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18" /><path d="M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="modal__desc">{project.fullDescription}</p>
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="modal__btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            Source Code
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Work() {
  const [selected, setSelected] = useState(null)

  const handleMouseMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
  }

  return (
    <section className="work">
      <div className="content">
        <h2 className="section-title">
          Pro<span className="stroke">Ject</span>
          <span className="section-title__square"></span>
        </h2>
        <p className="work__subtitle">Showcasing a selection of projects that reflect my skills, creativity, and passion for building meaningful digital experiences.</p>
      </div>
      <div className="work__grid">
        {projects.map((p, i) => (
          <div
            key={i}
            className="work__card"
            style={{ '--card-gradient': p.gradient, '--card-border': p.borderColor }}
            onMouseMove={handleMouseMove}
            onClick={() => setSelected(p)}
          >
            <div className="work__card-img">
              <img src={p.img} alt={p.title} style={p.title === 'Coming Soon' ? { filter: 'blur(6px)' } : undefined} />
              {p.title === 'Coming Soon' && <span className="work__card-coming">Coming Soon</span>}
            </div>
            <div className="work__card-info">
              <h3 className="work__card-title">{p.title}</h3>
              <p className="work__card-desc">{p.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
