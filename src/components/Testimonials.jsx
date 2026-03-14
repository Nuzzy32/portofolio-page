const testimonials = [
  {
    name: 'Sarah Johnson',
    profession: 'CEO at TechStart',
    avatar: 'https://i.pravatar.cc/64?img=1',
    quote: 'Adrian built an incredible website for our startup. Clean code, fast delivery, and amazing attention to detail. The final result exceeded all of our expectations.',
  },
  {
    name: 'Michael Chen',
    profession: 'Product Manager at DigitalCo',
    avatar: 'https://i.pravatar.cc/64?img=3',
    quote: 'Working with Adrian was a fantastic experience. He transformed our outdated site into a modern, responsive masterpiece that our users absolutely love.',
  },
  {
    name: 'Emily Rodriguez',
    profession: 'Founder at CreativeHub',
    avatar: 'https://i.pravatar.cc/64?img=5',
    quote: 'The UI/UX design Adrian delivered exceeded all expectations. Our users love the new interface and engagement is up 40%. Truly a talented developer.',
  },
  {
    name: 'David Park',
    profession: 'CTO at WebFlow Studio',
    avatar: 'https://i.pravatar.cc/64?img=8',
    quote: 'Professional, creative, and technically skilled. Adrian is the go-to developer for anyone needing a top-tier web presence. Highly recommended.',
  },
  {
    name: 'Lisa Wang',
    profession: 'Marketing Director',
    avatar: 'https://i.pravatar.cc/64?img=9',
    quote: 'Adrian has an eye for design that truly sets him apart. The website he created for us is both beautiful and highly functional across all devices.',
  },
]

const duplicated = [...testimonials, ...testimonials]

export default function Testimonials() {
  return (
    <section className="testi">
      <div className="content">
        <h2 className="section-title">
          TESTI<span className="stroke">MONIALS</span>
          <span className="section-title__square"></span>
        </h2>
        <p className="testi__subtitle">What clients say about working with me</p>
      </div>

      <div className="testi__slider">
        <div className="testi__track">
          {duplicated.map((t, i) => (
            <div key={i} className="testi__card">
              <p className="testi__quote">"{t.quote}"</p>
              <div className="testi__card-footer">
                <div className="testi__author">
                  <img src={t.avatar} alt={t.name} className="testi__avatar" />
                  <div className="testi__author-info">
                    <h4 className="testi__name">{t.name}</h4>
                    <p className="testi__profession">{t.profession}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
