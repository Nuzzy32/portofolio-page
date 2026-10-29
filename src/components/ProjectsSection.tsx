import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { CSSProperties } from 'react';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';
import { projects } from '../data';
import type { Project } from '../data';

const roundedLg = 'rounded-[32px] sm:rounded-[42px] md:rounded-[52px]';
const roundedPhone = 'rounded-[24px] sm:rounded-[30px] md:rounded-[36px]';

function ProjectVideo({ src, poster, label }: { src: string; poster: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();

  // Autoplay muted while in view; only one film plays at a time (cards stack on top of each other).
  useEffect(() => {
    const el = ref.current;
    if (!el || reduceMotion) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.querySelectorAll<HTMLVideoElement>('video[data-film]').forEach((v) => v !== el && v.pause());
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduceMotion]);

  return (
    <video
      ref={ref}
      data-film
      src={src}
      poster={poster}
      aria-label={label}
      muted
      loop
      playsInline
      controls
      preload="metadata"
      className={`project-preview-main w-full bg-black object-cover ${roundedLg}`}
    />
  );
}

function ProjectMedia({ project }: { project: Project }) {
  const { main, stills, stillsKind, name } = project;

  if (!main) {
    return (
      <div className="grid grid-cols-2 gap-3 md:flex md:justify-center md:gap-6">
        {stills.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${name} screen ${i + 1}`}
            loading="lazy"
            className={`w-full object-cover md:h-[clamp(14rem,46dvh,34rem)] md:w-auto ${roundedPhone}`}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-6">
      {stillsKind === 'phone' ? (
        <div className="flex gap-4 md:w-[40%] md:gap-6">
          {stills.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${name} screen ${i + 1}`}
              loading="lazy"
              className={`project-preview-main min-w-0 flex-1 object-cover object-top ${roundedPhone}`}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4 md:w-[40%] md:gap-6">
          <img
            src={stills[0]}
            alt={`${name} preview 1`}
            loading="lazy"
            className={`project-preview-small w-full object-cover ${roundedLg}`}
          />
          <img
            src={stills[1]}
            alt={`${name} preview 2`}
            loading="lazy"
            className={`project-preview-stack w-full object-cover ${roundedLg}`}
          />
        </div>
      )}
      <div className="md:w-[60%]">
        {main.type === 'video' ? (
          <ProjectVideo src={main.src} poster={main.poster} label={`${name} motion graphic`} />
        ) : (
          <img
            src={main.src}
            alt={`${name} main preview`}
            loading="lazy"
            className={`project-preview-main w-full object-cover object-top ${roundedLg}`}
          />
        )}
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
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
      style={style}
      initial={reduceMotion ? false : { y: 90, opacity: 0.86, scale: 0.985 }}
      whileInView={reduceMotion ? undefined : { y: 0, opacity: 1, scale: 1 }}
      viewport={{ amount: 0.18, margin: '-12% 0px -18% 0px' }}
      transition={{ type: 'spring', duration: 0.7, bounce: 0 }}
      className="project-sticky-card mb-[22vh] overflow-hidden rounded-[40px] border-[3px] border-[#D7E2EA] bg-[#0C0C0C] p-4 shadow-[0_40px_110px_rgba(0,0,0,0.62)] last:mb-0 sm:rounded-[50px] sm:p-6 md:sticky md:mb-[24vh] md:rounded-[60px] md:p-8 lg:p-10"
    >
      <div className="mb-6 grid gap-5 text-[#D7E2EA] md:mb-8 md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-end md:gap-10 lg:mb-10">
        <p className="hero-heading text-[clamp(3.75rem,8.5vw,128px)] font-black leading-[0.8]">{project.number}</p>
        <div>
          <p className="text-xs font-light uppercase tracking-[0.28em] text-[#D7E2EA]/60 md:text-sm">
            {project.category}
          </p>
          <h3 className="mt-2 text-[clamp(2rem,4.2vw,4rem)] font-light leading-none tracking-tight">
            {project.name}
          </h3>
          <p className="mt-4 max-w-[58ch] text-[clamp(0.9rem,1.15vw,1.05rem)] font-light leading-relaxed text-[#D7E2EA]/60 [text-wrap:pretty]">
            {project.description}
          </p>
          <ul aria-label="Tech stack" className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-[#D7E2EA]/20 px-3 py-1 text-[11px] font-light uppercase leading-none tracking-[0.2em] text-[#D7E2EA]/70"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
        {project.href && (
          <div className="md:self-end">
            <LiveProjectButton href={project.href} label="GitHub" />
          </div>
        )}
      </div>

      <ProjectMedia project={project} />
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
