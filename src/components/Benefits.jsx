import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const skills = [
  {
    name: 'Visual Studio Code',
    category: 'Code Editor',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    level: 90,
    description: 'My primary code editor. I use it daily with custom extensions, snippets, and shortcuts that boost my productivity significantly.',
  },
  {
    name: 'React JS',
    category: 'Framework',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    level: 80,
    description: 'Experienced in building modern SPAs with React, including hooks, context, and state management. Comfortable with component architecture.',
  },
  {
    name: 'Javascript',
    category: 'Language',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    level: 85,
    description: 'Strong understanding of ES6+, async/await, DOM manipulation, and modern JavaScript patterns. My core programming language.',
  },
  {
    name: 'Figma',
    category: 'Design App',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    level: 75,
    description: 'Proficient in creating UI/UX designs, prototyping, and design systems. I use Figma to plan every project before coding.',
  },
  {
    name: 'Canva',
    category: 'Design App',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg',
    level: 85,
    description: 'Skilled in creating social media graphics, presentations, and marketing materials. Great for quick and professional designs.',
  },
  {
    name: 'HTML',
    category: 'Language',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    level: 95,
    description: 'Expert-level HTML5 with deep knowledge of semantic markup, accessibility, SEO best practices, and modern web standards.',
  },
  {
    name: 'MySQL',
    category: 'Database',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    level: 70,
    description: 'Comfortable with database design, complex queries, joins, and optimization. Used in multiple full-stack projects.',
  },
  {
    name: 'Firebase',
    category: 'Framework',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    level: 75,
    description: 'Experienced with Firebase services including Firestore, Authentication, Cloud Functions, and Hosting for rapid app development.',
  },
  {
    name: 'Vite',
    category: 'Framework',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
    level: 85,
    description: 'My go-to build tool for modern web projects. Fast HMR, optimized builds, and excellent plugin ecosystem for React development.',
  },
  {
    name: 'GitHub',
    category: 'Repository',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    level: 80,
    description: 'Proficient in version control with Git and GitHub. Experienced with branches, pull requests, CI/CD workflows, and collaboration.',
  },
  {
    name: 'Java',
    category: 'Language',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    level: 75,
    description: 'Experienced in object-oriented programming with Java. Used for building desktop applications, backend services, and academic projects.',
  },
  {
    name: 'Python',
    category: 'Language',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    level: 80,
    description: 'Proficient in Python for scripting, data analysis, and backend development. Comfortable with libraries like Flask, NumPy, and Pandas.',
  },
]

function SkillCard({ skill }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    const keyHandler = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', handler)
    document.addEventListener('keydown', keyHandler)
    return () => { document.removeEventListener('mousedown', handler); document.removeEventListener('keydown', keyHandler) }
  }, [open])

  return (
    <div className="skills__card-wrapper" ref={ref}>
      <div
        className="skills__card"
        onClick={() => setOpen(!open)}
        style={{ cursor: 'pointer' }}
      >
        <div className="skills__icon">
          <img src={skill.icon} alt={skill.name} />
        </div>
        <div className="skills__info">
          <span className="skills__name">{skill.name}</span>
          <span className="skills__category">{skill.category}</span>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="skills__overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
          >
          <motion.div
            className="skills__popover"
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(4px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.9, filter: 'blur(4px)' }}
            transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="skills__popover-header">
              <div className="skills__icon">
                <img src={skill.icon} alt={skill.name} />
              </div>
              <div className="skills__info">
                <span className="skills__name">{skill.name}</span>
                <span className="skills__category">{skill.category}</span>
              </div>
              <button className="skills__close" onClick={() => setOpen(false)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18" /><path d="M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="skills__popover-body">
              <div className="skills__level-bar">
                <motion.div
                  className="skills__level-fill"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                />
                <span className="skills__level-text">{skill.level}%</span>
              </div>
              <p className="skills__desc">
                {skill.description.split(' ').map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ filter: 'blur(8px)', opacity: 0, y: 5 }}
                    animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut', delay: 0.03 * i }}
                    style={{ display: 'inline-block' }}
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </p>
            </div>
          </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Benefits() {
  return (
    <section className="benefits">
      <div className="content">
        <h2 className="section-title">
          SKI<span className="stroke">LLS</span>
          <span className="section-title__square"></span>
        </h2>
        <div className="skills__grid">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}
