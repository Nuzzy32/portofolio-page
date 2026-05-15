import { useEffect, useRef } from 'react';
import { marqueeImages } from '../data';

const ROW_1 = marqueeImages.slice(0, 11);
const ROW_2 = marqueeImages.slice(11);

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollOffsetRef = useRef(0);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const scrolled = window.scrollY - sectionTop + window.innerHeight;
      const offset = scrolled * 0.3;

      scrollOffsetRef.current = offset;

      if (row1Ref.current) {
        row1Ref.current.style.transform = `translateX(${offset - 200}px)`;
      }
      if (row2Ref.current) {
        row2Ref.current.style.transform = `translateX(${-(offset - 200)}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden pt-24 sm:pt-32 md:pt-40 pb-10"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <div className="flex flex-col gap-3">
        <div className="overflow-hidden w-full">
          <div
            ref={row1Ref}
            className="flex gap-3"
            style={{
              willChange: 'transform',
              transform: 'translateX(-200px)',
            }}
          >
            {[...ROW_1, ...ROW_1, ...ROW_1].map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 rounded-2xl overflow-hidden"
                style={{ width: '420px', height: '270px' }}
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden w-full">
          <div
            ref={row2Ref}
            className="flex gap-3"
            style={{
              willChange: 'transform',
              transform: 'translateX(200px)',
            }}
          >
            {[...ROW_2, ...ROW_2, ...ROW_2].map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 rounded-2xl overflow-hidden"
                style={{ width: '420px', height: '270px' }}
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
