import { ArrowUpRight } from 'lucide-react';
import { personal } from '../data';

export default function LiveProjectButton({ href = personal.github }: { href?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition duration-200 hover:bg-[#D7E2EA]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D7E2EA] sm:px-10 sm:py-3.5 sm:text-base"
    >
      Live Project
      <ArrowUpRight aria-hidden="true" className="ml-3 h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2} />
    </a>
  );
}
