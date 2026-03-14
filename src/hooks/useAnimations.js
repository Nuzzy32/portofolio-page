import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Splitting from 'splitting'

gsap.registerPlugin(ScrollTrigger)

export default function useAnimations() {
  useEffect(() => {
    // 1. Splitting
    Splitting()

    // 3. Intro timeline
    const gTl = gsap.timeline()
    gTl.from('.title .char', 1, {
      opacity: 0,
      yPercent: 130,
      stagger: 0.06,
      ease: 'back.out',
    })
    gTl.to(
      '.header__img',
      2,
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        scale: 1,
        ease: 'expo.out',
      },
      '-=1'
    )
    gTl.from(
      '.header__marq',
      2,
      { opacity: 0, yPercent: 100, ease: 'expo.out' },
      '-=1.5'
    )

    // 4. Section-title squares rotation
    const gsapSq = gsap.utils.toArray('.section-title__square')
    gsapSq.forEach((gSq) => {
      const rotat = gsap.from(gSq, 3, { rotation: 720 })
      ScrollTrigger.create({
        trigger: gSq,
        animation: rotat,
        start: 'top bottom',
        scrub: 1.9,
      })
    })

    // header
    gsap.to('.title_paralax', {
      scrollTrigger: { trigger: '.header', start: 'top top', scrub: 1.9 },
      yPercent: -150,
    })
    gsap.to('.header .stroke', {
      scrollTrigger: { trigger: '.header', start: 'top top', scrub: 1.9 },
      xPercent: 50,
    })
    gsap.to('.header__img', {
      scrollTrigger: { trigger: '.header', start: 'top top', scrub: 1.9 },
      xPercent: -70,
    })
    gsap.to('.header__img img', {
      scrollTrigger: { trigger: '.header', start: 'top top', scrub: 1.9 },
      scale: 1.3,
    })
    gsap.to('.header__marq-wrapp', {
      scrollTrigger: { trigger: '.header', start: 'top top', scrub: 1.9 },
      xPercent: -50,
    })
    gsap.to('.header__marq-star img', {
      scrollTrigger: { trigger: '.header', start: 'top top', scrub: 1.9 },
      rotate: -720,
    })

    // about
    gsap.from('.about__img', {
      scrollTrigger: { trigger: '.about', start: 'top bottom', scrub: 1.9 },
      yPercent: 80,
    })
    gsap.from('.about__img img', {
      scrollTrigger: { trigger: '.about', start: 'top bottom', scrub: 1.9 },
      scale: 1.6,
    })
    gsap.to('.about__txt', {
      scrollTrigger: {
        trigger: '.about__wrapp',
        start: 'top bottom',
        scrub: 1.9,
      },
      yPercent: 50,
    })

    // skills
    gsap.from('.skills__grid', {
      yPercent: 60,
      scrollTrigger: {
        trigger: '.benefits',
        start: 'top bottom',
        scrub: 1.9,
      },
    })

    // testimonials
    gsap.from('.testi__img-container', {
      yPercent: 50,
      scrollTrigger: { trigger: '.testi', start: 'top bottom', scrub: 1.9 },
    })
    gsap.from('.testi__content', {
      yPercent: 80,
      scrollTrigger: { trigger: '.testi', start: 'top bottom', scrub: 1.9 },
    })

    // portfolio
    gsap.from('.work__item, .work__item-num', {
      y: (i, el) => 1 - parseFloat(el.getAttribute('data-speed')),
      scrollTrigger: { trigger: '.work', start: 'top bottom', scrub: 1.9 },
    })
    gsap.from('.work__item-img img', {
      scale: 1.6,
      scrollTrigger: {
        trigger: '.work__wrapp',
        start: 'top bottom',
        scrub: 1.9,
      },
    })

    // services
    gsap.from('.serv__item-arrow', {
      x: (i, el) => 1 - parseFloat(el.getAttribute('data-speed')),
      scrollTrigger: {
        trigger: '.serv__list',
        start: 'top bottom',
        scrub: 1.9,
      },
    })

    // pricing
    gsap.from('.pricing__card', {
      yPercent: 60,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: { trigger: '.pricing', start: 'top bottom', scrub: 1.9 },
    })

    // contact
    gsap.from('.contact__info', {
      yPercent: 60,
      scrollTrigger: { trigger: '.contact', start: 'top bottom', scrub: 1.9 },
    })
    gsap.from('.contact__form', {
      yPercent: 80,
      scrollTrigger: { trigger: '.contact', start: 'top bottom', scrub: 1.9 },
    })

    // footer
    gsap.from('.footer__div span', {
      y: (i, el) => 1 - parseFloat(el.getAttribute('data-speed')),
      opacity: 0,
      scrollTrigger: {
        trigger: '.footer',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 1.9,
      },
    })

    return () => {
      // cleanup all GSAP
      ScrollTrigger.getAll().forEach((t) => t.kill())
      gsap.killTweensOf('*')
    }
  }, [])
}
