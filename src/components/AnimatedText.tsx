import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  scrollOffset?: readonly [string, string];
}

export default function AnimatedText({
  text,
  className = '',
  style,
  scrollOffset = ['start 0.8', 'end 0.2'] as const,
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    offset: scrollOffset as any,
  });

  const totalChars = text.length;

  return (
    <p ref={containerRef} className={className} style={style}>
      {text.split('').map((char, index) => (
        <AnimatedLetter
          key={index}
          char={char}
          scrollYProgress={scrollYProgress}
          index={index}
          total={totalChars}
        />
      ))}
    </p>
  );
}

interface AnimatedLetterProps {
  char: string;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
  index: number;
  total: number;
}

function AnimatedLetter({
  char,
  scrollYProgress,
  index,
  total,
}: AnimatedLetterProps) {
  const charProgress = index / total;
  const start = Math.max(0, charProgress - 0.1);
  const end = Math.min(1, charProgress + 0.05);
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="invisible font-medium">
        {char === ' ' ? ' ' : char}
      </span>
      <motion.span
        style={{ opacity }}
        className="absolute inset-0 font-medium text-[#D7E2EA]"
      >
        {char === ' ' ? ' ' : char}
      </motion.span>
    </span>
  );
}
