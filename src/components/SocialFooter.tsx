import { AtSign, ExternalLink, GitBranch } from 'lucide-react';
import { personal } from '../data';

const links = [
  { label: 'GitHub', href: personal.github, Icon: GitBranch },
  { label: 'Instagram', href: personal.instagram, Icon: AtSign },
  { label: 'X / Twitter', href: personal.twitter, Icon: ExternalLink },
];

export default function SocialFooter() {
  return (
    <footer id="social" className="bg-[#0C0C0C] px-5 pb-10 text-[#D7E2EA] sm:px-8 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-[#D7E2EA]/20 pt-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-2xl font-black uppercase">{personal.name}</p>
          <p className="mt-1 font-light uppercase tracking-[0.28em] text-[#D7E2EA]/55">{personal.role}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {links.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/25 px-5 py-3 text-sm font-medium uppercase tracking-widest transition hover:bg-[#D7E2EA]/10"
            >
              {label}
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
