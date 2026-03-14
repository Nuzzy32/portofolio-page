export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <a href="#top" className="nav__link" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Home</a>
        <a href="#about" className="nav__link" onClick={(e) => { e.preventDefault(); document.querySelector('.about').scrollIntoView({ behavior: 'smooth' }) }}>About</a>
        <a href="#project" className="nav__link" onClick={(e) => { e.preventDefault(); document.querySelector('.work').scrollIntoView({ behavior: 'smooth' }) }}>Project</a>
        <a href="#contact" className="nav__link" onClick={(e) => { e.preventDefault(); document.querySelector('.contact').scrollIntoView({ behavior: 'smooth' }) }}>Contact</a>
      </nav>
      <h1 className="title" data-splitting="">
        <span className="title_paralax">Adrian Faishal Hilmy</span>
        <span className="stroke">Portofolio</span>
      </h1>
      <div className="header__img">
        <img src="/img/adrian 1.jpg" alt="1" />
      </div>
      <div className="header__socials">
        <a href="https://github.com/Nuzzy32" target="_blank" rel="noopener noreferrer" className="header__social" aria-label="GitHub">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
        <a href="https://www.instagram.com/drian_fh/" target="_blank" rel="noopener noreferrer" className="header__social" aria-label="Instagram">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
          </svg>
        </a>
        <a href="https://x.com/TheNuzzys" target="_blank" rel="noopener noreferrer" className="header__social" aria-label="X">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
      </div>
      <div className="header__marq">
        <div className="header__marq-wrapp">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="header__marq-txt">
              discuss with me
              <span className="header__marq-star">
                <img src="/img/star.svg" alt="" />
              </span>
            </span>
          ))}
        </div>
      </div>
    </header>
  )
}
