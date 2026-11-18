"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useRef } from "react";
import { splitWords, wordRange } from "@/lib/reveal-math";

type ScrubWordsProps = {
  text: string;
  className?: string;
};

function Word({
  word,
  index,
  count,
  progress,
}: {
  word: string;
  index: number;
  count: number;
  progress: MotionValue<number>;
}) {
  const [start, end] = wordRange(index, count);
  const opacity = useTransform(progress, [start, end], [0.18, 1]);
  return <motion.span style={{ opacity }}>{word}</motion.span>;
}

/** Words light up one by one as the paragraph scrolls through the viewport. */
export function ScrubWords({ text, className }: ScrubWordsProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.82", "end 0.45"],
  });
  const words = splitWords(text);

  if (reduce) {
    return <p className={className}>{text}</p>;
  }

  return (
    <p ref={ref} className={className}>
      {/* aria-label is not supported on <p>; screen readers get this copy. */}
      <span className="sr-only">{text}</span>
      {/* A real space between words keeps soft-wrap opportunities. */}
      {words.map((word, i) => (
        <span key={`${i}-${word}`} aria-hidden="true">
          {i > 0 ? " " : null}
          <Word
            word={word}
            index={i}
            count={words.length}
            progress={scrollYProgress}
          />
        </span>
      ))}
    </p>
  );
}
