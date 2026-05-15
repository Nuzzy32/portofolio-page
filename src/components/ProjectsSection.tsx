import { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { CSSProperties } from 'react';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';
import { projects } from '../data';

type Project = (typeof projects)[number];

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const containerRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const style = {
    '--card-offset': `${index * 22}px`,
    '--card-z': index + 1,
  } as CSSProperties & {
    '--card-offset': string;
    '--card-z': number;
  };

  return (
    <motion.article
      ref={containerRef}
      style={style}
      initial={reduceMotion ? false : { y: 90, opacity: 0.86, scale: 0.985 }}
      whileInView={reduceMotion ? undefined : { y: 0, opacity: 1, scale: 1 }}
      viewport={{ amount: 0.18, margin: '-12% 0px -18% 0px' }}
      transition={{ type: 'spring', duration: 0.7, bounce: 0 }}
      className="project-sticky-card mb-[22vh] overflow-hidden rounded-[40px] border-[3px] border-[#D7E2EA] bg-[#0C0C0C] p-4 shadow-[0_40px_110px_rgba(0,0,0,0.62)] last:mb-0 sm:rounded-[50px] sm:p-6 md:sticky md:mb-[24vh] md:rounded-[60px] md:p-8 lg:p-10"
    >
      <div className="mb-6 flex flex-col gap-5 text-[#D7E2EA] md:mb-8 md:flex-row md:items-center md:justify-between lg:mb-9">
        <div className="grid gap-4 md:grid-cols-[minmax(130px,0.28fr)_1fr] md:items-end lg:grid-cols-[minmax(180px,0.3fr)_1fr]">
          <p className="hero-heading text-[clamp(4rem,10vw,150px)] font-black leading-none">
            {project.number}
          </p>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] opacity-90 md:text-xl">{project.category}</p>
            <h3 className="mt-4 text-[clamp(1.8rem,4vw,3.9rem)] font-light leading-none tracking-wide">
              {project.name}
            </h3>
          </div>
        </div>
        <LiveProjectButton />
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:gap-6">
        <div className="flex flex-col gap-4 md:w-[40%] md:gap-6">
          <img
            src={project.images[0]}
            alt={`${project.name} preview 1`}
            loading="lazy"
            className="project-preview-small w-full rounded-[32px] object-cover sm:rounded-[42px] md:rounded-[52px]"
          />
          <img
            src={project.images[1]}
            alt={`${project.name} preview 2`}
            loading="lazy"
            className="project-preview-stack w-full rounded-[32px] object-cover sm:rounded-[42px] md:rounded-[52px]"
          />
        </div>
        <div className="md:w-[60%]">
          <img
            src={project.images[2]}
            alt={`${project.name} main preview`}
            loading="lazy"
            className="project-preview-main w-full rounded-[32px] object-cover sm:rounded-[42px] md:rounded-[52px]"
          />
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn y={40}>
        <h2 className="hero-heading mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight md:mb-24">
          Project
        </h2>
      </FadeIn>

      <div className="project-stack mx-auto max-w-7xl pb-[22vh] md:pb-[28vh]">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
