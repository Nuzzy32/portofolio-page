const letters = [
  { char: 'A', speed: -300 },
  { char: 'n', speed: 100 },
  { char: 'i', speed: -300 },
  { char: 'm', speed: 350 },
  { char: 'm', speed: 300 },
  { char: 'a', speed: 200 },
  { char: 's', speed: -310 },
  { char: 't', speed: 200 },
  { char: 'e', speed: -340 },
  { char: 'r', speed: -100 },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__div">
        {letters.map((l, i) => (
          <span key={i} data-speed={l.speed}>{l.char}</span>
        ))}
      </div>
    </footer>
  )
}
