const works = [
  {
    num: '/001',
    img: '/img/riskala.png',
    itemSpeed: -300,
    numSpeed: -1000,
    title: 'RISKALA Lite',
    description: 'Developed RISKALA Lite, a full-stack mobile application (Flutter, Laravel, MySQL) focused on monitoring employee mental health. Engineered structured self-assessment tools (Likert-scale questionnaires) and an HR Admin Dashboard for real-time analytics, seamlessly integrated with an accessible, psychology-driven UI.',
    link: 'https://github.com/Nuzzy32/riskala_lite2',
  },
  { num: '/002', img: '/img/4.jpg', itemSpeed: -600, numSpeed: -500 },
  { num: '/003', img: '/img/5.jpg', itemSpeed: -700, numSpeed: -700 },
  { num: '/004', img: '/img/6.jpg', itemSpeed: -400, numSpeed: -200 },
]

export default function Work() {
  return (
    <section className="work">
      <div className="content">
        <h2 className="section-title">
          Pro<span className="stroke">Ject</span>
          <span className="section-title__square"></span>
        </h2>
      </div>
      <div className="work__wrapp">
        {works.map((w) => {
          const inner = (
            <div key={w.num} className="work__item" data-speed={w.itemSpeed}>
              <span className="work__item-num" data-speed={w.numSpeed}>{w.num}</span>
              <div className="work__item-img">
                <img src={w.img} alt={w.title || w.num} />
                {w.description && (
                  <div className="work__item-overlay">
                    <h3 className="work__item-overlay-title">{w.title}</h3>
                    <p className="work__item-overlay-desc">{w.description}</p>
                  </div>
                )}
              </div>
            </div>
          )
          return w.link ? (
            <a key={w.num} href={w.link} target="_blank" rel="noopener noreferrer" className="work__item-link">
              {inner}
            </a>
          ) : (
            <div key={w.num}>{inner}</div>
          )
        })}
      </div>
    </section>
  )
}
