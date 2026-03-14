import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    name: 'Sarah Johnson',
    designation: 'CEO at TechStart',
    src: 'https://i.pravatar.cc/500?img=1',
    quote: 'Adrian built an incredible website for our startup. Clean code, fast delivery, and amazing attention to detail. The final result exceeded all of our expectations.',
  },
  {
    name: 'Michael Chen',
    designation: 'Product Manager at DigitalCo',
    src: 'https://i.pravatar.cc/500?img=3',
    quote: 'Working with Adrian was a fantastic experience. He transformed our outdated site into a modern, responsive masterpiece that our users absolutely love.',
  },
  {
    name: 'Emily Rodriguez',
    designation: 'Founder at CreativeHub',
    src: 'https://i.pravatar.cc/500?img=5',
    quote: 'The UI/UX design Adrian delivered exceeded all expectations. Our users love the new interface and engagement is up 40%. Truly a talented developer.',
  },
  {
    name: 'David Park',
    designation: 'CTO at WebFlow Studio',
    src: 'https://i.pravatar.cc/500?img=8',
    quote: 'Professional, creative, and technically skilled. Adrian is the go-to developer for anyone needing a top-tier web presence. Highly recommended.',
  },
  {
    name: 'Lisa Wang',
    designation: 'Marketing Director',
    src: 'https://i.pravatar.cc/500?img=9',
    quote: 'Adrian has an eye for design that truly sets him apart. The website he created for us is both beautiful and highly functional across all devices.',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length)
  }, [])

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(handleNext, 5000)
    return () => clearInterval(interval)
  }, [handleNext])

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10

  return (
    <section className="testi">
      <div className="content">
        <h2 className="section-title">
          TESTI<span className="stroke">MONIALS</span>
          <span className="section-title__square"></span>
        </h2>
      </div>
      <div className="testi__wrapp">
        {/* Image stack */}
        <div className="testi__img-container">
          <AnimatePresence>
            {testimonials.map((t, index) => (
              <motion.div
                key={t.src}
                initial={{ opacity: 0, scale: 0.9, z: -100, rotate: randomRotateY() }}
                animate={{
                  opacity: index === active ? 1 : 0.7,
                  scale: index === active ? 1 : 0.95,
                  z: index === active ? 0 : -100,
                  rotate: index === active ? 0 : randomRotateY(),
                  zIndex: index === active ? 999 : testimonials.length + 2 - index,
                  y: index === active ? [0, -80, 0] : 0,
                }}
                exit={{ opacity: 0, scale: 0.9, z: 100, rotate: randomRotateY() }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="testi__img-item"
              >
                <img src={t.src} alt={t.name} draggable={false} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Text content */}
        <div className="testi__content">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <h3 className="testi__name">{testimonials[active].name}</h3>
            <p className="testi__designation">{testimonials[active].designation}</p>
            <p className="testi__quote">
              {testimonials[active].quote.split(' ').map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: 'blur(10px)', opacity: 0, y: 5 }}
                  animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut', delay: 0.02 * index }}
                  style={{ display: 'inline-block' }}
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </p>
          </motion.div>

          <div className="testi__nav">
            <button className="testi__btn" onClick={handlePrev}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="testi__btn" onClick={handleNext}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
