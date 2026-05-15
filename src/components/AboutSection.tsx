import { motion, useReducedMotion } from 'framer-motion';
import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';
import Magnet from './Magnet';
import { aboutText, aboutDecorations, personal } from '../data';
import fullCharacter from '../../assets/ full character.png';

export default function AboutSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0C0C0C] px-5 py-20 sm:px-8 md:px-10 lg:py-28"
    >
      {aboutDecorations.map((item) => (
        <FadeIn
          key={item.alt}
          delay={item.delay}
          duration={0.9}
          x={item.x}
          y={0}
          className={`pointer-events-none absolute z-0 opacity-80 ${item.className}`}
        >
          <img src={item.src} alt={item.alt} loading="lazy" className="w-full object-contain" />
        </FadeIn>
      ))}

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <FadeIn delay={0.12} x={-48} y={0} className="order-2 flex justify-center lg:order-1">
          <div className="relative w-full max-w-[430px] sm:max-w-[500px] lg:max-w-[560px]">
            <div className="absolute inset-x-[14%] bottom-1 h-[18%] rounded-full bg-[#D7E2EA]/18 blur-3xl" />
            <div className="absolute inset-x-[8%] bottom-0 h-[20%] rounded-full border border-[#D7E2EA]/15 bg-white/[0.03]" />
            <Magnet
              padding={140}
              strength={3}
              disabled={reduceMotion ?? false}
              activeTransition="transform 0.3s ease-out"
              inactiveTransition="transform 0.6s ease-in-out"
            >
              <motion.img
                src={fullCharacter}
                alt="Adrian Faishal Hilmy 3D full character"
                loading="lazy"
                draggable="false"
                animate={reduceMotion ? undefined : { y: [0, -12, 0], rotate: [0, -0.6, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative mx-auto max-h-[680px] w-full select-none object-contain drop-shadow-[0_36px_80px_rgba(0,0,0,0.55)]"
              />
            </Magnet>
          </div>
        </FadeIn>

        <div className="order-1 flex flex-col items-center gap-10 text-center lg:order-2 lg:items-start lg:text-left">
          <FadeIn delay={0} y={40}>
            <h2 className="hero-heading text-[clamp(3rem,11vw,150px)] font-black uppercase leading-none tracking-tight">
              About me
            </h2>
          </FadeIn>
          <AnimatedText
            text={aboutText}
            className="relative max-w-[760px] text-[clamp(1rem,1.65vw,1.28rem)] leading-relaxed text-[#D7E2EA]"
          />
          <div className="grid w-full max-w-3xl grid-cols-3 gap-3 text-center">
            {[
              ['1 year', 'Experience'],
              ['5 projects', 'Completed'],
              [personal.location, 'Location'],
            ].map(([value, label], index) => (
              <FadeIn key={label} delay={index * 0.08} y={20}>
                <div className="rounded-[28px] border border-[#D7E2EA]/20 bg-white/[0.03] px-3 py-5">
                  <p className="text-[clamp(1.2rem,3vw,2.5rem)] font-black uppercase leading-none text-[#D7E2EA]">
                    {value}
                  </p>
                  <p className="mt-3 text-xs font-light uppercase tracking-[0.28em] text-[#D7E2EA]/60">{label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <ContactButton />
        </div>
      </div>
    </section>
  );
}
