import { useEffect, useRef } from 'react'

export default function MusicPlayer() {
  const audioARef = useRef(null)
  const audioBRef = useRef(null)
  const sfxRef = useRef(null)
  const startedRef = useRef(false)

  useEffect(() => {
    const a = audioARef.current
    const b = audioBRef.current
    const sfx = sfxRef.current
    const FADE = 2
    const VOL = 0.3
    let current = a
    let next = b
    let rafId = null

    const crossfadeLoop = () => {
      if (!current.duration) return
      const remaining = current.duration - current.currentTime

      if (remaining <= FADE && next.paused) {
        next.volume = 0
        next.currentTime = 0
        next.play().catch(() => {})
      }

      if (remaining <= FADE) {
        const progress = 1 - remaining / FADE
        current.volume = VOL * (1 - progress)
        next.volume = VOL * progress
      }

      if (current.ended || current.currentTime >= current.duration - 0.05) {
        current.pause()
        current.currentTime = 0
        current.volume = VOL
        const temp = current
        current = next
        next = temp
      }

      rafId = requestAnimationFrame(crossfadeLoop)
    }

    const tryPlay = () => {
      if (startedRef.current) return
      startedRef.current = true
      cleanup()

      // Intro SFX
      sfx.volume = 0.5
      const headerImg = document.querySelector('.header__img img')
      if (headerImg && headerImg.complete) {
        sfx.play().catch(() => {})
      } else if (headerImg) {
        headerImg.addEventListener('load', () => sfx.play().catch(() => {}), { once: true })
      }

      // BGM with crossfade loop
      a.volume = VOL
      a.play().then(() => {
        rafId = requestAnimationFrame(crossfadeLoop)
      }).catch(() => {})
    }

    const events = ['click', 'keydown', 'touchstart']
    events.forEach((e) => document.addEventListener(e, tryPlay))

    const cleanup = () => {
      events.forEach((e) => document.removeEventListener(e, tryPlay))
    }

    return () => {
      cleanup()
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <audio ref={audioARef} src="/music.mp3" preload="auto" />
      <audio ref={audioBRef} src="/music.mp3" preload="auto" />
      <audio ref={sfxRef} src="/sfx-intro.mp3" preload="auto" />
      <div className="music-btn music-btn--playing" aria-label="Music playing">
        <div className="music-btn__bars">
          <span /><span /><span /><span />
        </div>
      </div>
    </>
  )
}
