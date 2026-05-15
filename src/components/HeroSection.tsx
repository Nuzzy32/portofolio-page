import { MapPin } from 'lucide-react';
import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';
import { personal } from '../data';
import portraitUrl from '../../assets/3d head no background.png';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col overflow-x-clip bg-[#0C0C0C]">
      <FadeIn as="nav" delay={0} y={-20} className="relative z-30 px-6 pt-6 md:px-10 md:pt-8">
        <div className="flex w-full items-center justify-between gap-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </FadeIn>

      <FadeIn
        delay={0.15}
        y={40}
        className="relative z-20 mt-6 overflow-hidden px-3 sm:mt-4 md:-mt-5"
      >
        <h1 className="hero-heading w-full text-[16vw] font-black uppercase leading-[0.82] tracking-tight sm:text-[15vw] md:text-[13.5vw] lg:text-[12vw]">
          <span className="block whitespace-nowrap">Adrian</span>
          <span className="block whitespace-nowrap md:hidden">Faishal</span>
          <span className="block whitespace-nowrap md:hidden">Hilmy</span>
          <span className="hidden whitespace-nowrap md:block">Faishal Hilmy</span>
        </h1>
      </FadeIn>

      <div className="absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:top-auto sm:bottom-0 sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]">
        <FadeIn delay={0.6} y={30}>
          <Magnet>
            <img
              src={portraitUrl}
              alt={`${personal.name} 3D portrait`}
              className="block w-full select-none object-contain"
              draggable="false"
            />
          </Magnet>
        </FadeIn>
      </div>

      <div className="relative z-20 mt-auto flex items-end justify-between gap-8 px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <div className="max-w-[175px] text-[clamp(0.75rem,1.4vw,1.5rem)] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[230px] md:max-w-[300px]">
            <p>{personal.role}</p>
            <p className="mt-3 flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {personal.location}
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
