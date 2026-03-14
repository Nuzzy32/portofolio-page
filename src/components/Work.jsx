const works = [
  { num: '/001', img: '/img/3.jpg', itemSpeed: -300, numSpeed: -1000 },
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
        {works.map((w) => (
          <div key={w.num} className="work__item" data-speed={w.itemSpeed}>
            <span className="work__item-num" data-speed={w.numSpeed}>{w.num}</span>
            <div className="work__item-img">
              <img src={w.img} alt={w.num} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
