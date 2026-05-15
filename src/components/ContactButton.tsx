export default function ContactButton({ href = '#contact' }: { href?: string }) {
  return (
    <a
      href={href}
      className="contact-button inline-flex rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white transition duration-200 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base"
    >
      Contact Me
    </a>
  );
}
