import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import FadeIn from './FadeIn';
import { skillDetails } from '../data';

type Skill = (typeof skillDetails)[number];

const railSkills = [...skillDetails, ...skillDetails];

function SkillRail() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0 });
  const isAnimating = !reduceMotion && inView;

  return (
    <div ref={ref} className="relative overflow-hidden border-y border-[rgba(12,12,12,0.12)] py-3">
      <motion.div
        className="flex w-max gap-3"
        animate={isAnimating ? { x: ['0%', '-50%'] } : undefined}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        {railSkills.map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="flex h-14 items-center gap-3 rounded-full border border-[rgba(12,12,12,0.14)] bg-[#0C0C0C] px-5 text-[#D7E2EA]"
          >
            <img src={skill.icon} alt={`${skill.name} rail icon`} className="h-7 w-7 object-contain" />
            <span className="whitespace-nowrap text-sm font-medium uppercase tracking-[0.22em]">
              {skill.category} {String((index % skillDetails.length) + 1).padStart(2, '0')}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function SkillRow({ skill, index }: { skill: Skill; index: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 54, filter: 'blur(8px)' }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.35, margin: '-8% 0px -12% 0px' }}
      transition={{ type: 'spring', duration: 0.72, bounce: 0, delay: (index % 4) * 0.035 }}
      className="group relative overflow-hidden rounded-[34px] border border-[rgba(12,12,12,0.15)] bg-[#0C0C0C] p-5 text-[#D7E2EA] shadow-[0_28px_90px_rgba(12,12,12,0.16)] sm:p-6 md:p-7"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D7E2EA]/45 to-transparent opacity-60" />

      <div className="grid gap-6 sm:grid-cols-[88px_1fr_auto] sm:items-center">
        <div className="grid h-20 w-20 place-items-center rounded-[26px] border border-white/10 bg-white/[0.06] transition duration-300 group-hover:-rotate-3 group-hover:scale-105 group-hover:bg-white/[0.1]">
          <img src={skill.icon} alt={`${skill.name} icon`} loading="lazy" className="h-11 w-11 object-contain" />
        </div>

        <div>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="text-xs font-light uppercase tracking-[0.35em] text-[#D7E2EA]/50">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1 text-[0.68rem] font-light uppercase tracking-[0.24em] text-[#D7E2EA]/60">
              {skill.category}
            </span>
          </div>
          <h3 className="text-[clamp(1.8rem,4vw,3.6rem)] font-black uppercase leading-none">
            {skill.name}
          </h3>
          <p className="mt-4 max-w-2xl text-sm font-light leading-relaxed text-[#D7E2EA]/58 sm:text-base">
            {skill.description}
          </p>
        </div>

        <p className="text-[clamp(2.6rem,6vw,5.2rem)] font-black leading-none text-[#D7E2EA]/90">
          {skill.level}%
        </p>
      </div>

      <div className="mt-7 h-2 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[#BBCCD7] via-white to-[#B600A8]"
          initial={reduceMotion ? { width: `${skill.level}%` } : { width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
        />
      </div>
    </motion.article>
  );
}

export default function SkillsStrip() {
  return (
    <section id="skills" className="relative overflow-x-clip bg-white px-5 py-20 text-[#0C0C0C] sm:px-8 sm:py-24 md:px-10 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-8 text-center text-[clamp(5rem,18vw,18rem)] font-black uppercase leading-none tracking-tight text-[#0C0C0C]/[0.035]">
        Toolkit
      </div>

      <div className="relative mx-auto max-w-7xl">
        <SkillRail />

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-16">
          <aside className="lg:sticky lg:top-32 lg:self-start xl:top-36">
            <FadeIn y={40}>
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.42em] text-[#0C0C0C]/45">
                Tech Console
              </p>
              <h2 className="text-[clamp(3.4rem,10vw,130px)] font-black uppercase leading-none tracking-tight text-[#0C0C0C]">
                Skills
              </h2>
              <p className="mt-8 max-w-md text-[clamp(1rem,1.7vw,1.35rem)] font-light leading-relaxed text-[#0C0C0C]/62">
                A focused toolkit for designing, building, shipping, and scaling modern full-stack web products.
              </p>
            </FadeIn>

            <FadeIn delay={0.16} y={28}>
              <div className="mt-10 grid grid-cols-2 border-y border-[rgba(12,12,12,0.14)]">
                <div className="border-r border-[rgba(12,12,12,0.14)] py-6 pr-6">
                  <p className="text-[clamp(2.4rem,6vw,4.8rem)] font-black leading-none">12</p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.28em] text-[#0C0C0C]/48">
                    Tools
                  </p>
                </div>
                <div className="py-6 pl-6">
                  <p className="text-[clamp(2.4rem,6vw,4.8rem)] font-black leading-none">06</p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.28em] text-[#0C0C0C]/48">
                    Domains
                  </p>
                </div>
              </div>
            </FadeIn>
          </aside>

          <div className="space-y-4">
            {skillDetails.map((skill, index) => (
              <SkillRow key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
