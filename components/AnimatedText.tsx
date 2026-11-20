"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

function Char({ ch, i, total, progress }: { ch: string; i: number; total: number; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [i / total, (i + 1) / total], [0.2, 1]);
  return (
    <span className="relative inline-block">
      <span className="opacity-0">{ch}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }} aria-hidden="true">
        {ch}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({ text, className, style }: { text: string; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.2"] });
  const words = text.split(" ");
  const total = text.length;
  let index = 0;

  return (
    <p ref={ref} className={className} style={style} aria-label={text}>
      {words.map((word, w) => {
        const start = index;
        index += word.length + 1;
        return (
          <span key={w} className="inline-block whitespace-nowrap" aria-hidden="true">
            {word.split("").map((ch, c) => (
              <Char key={c} ch={ch} i={start + c} total={total} progress={scrollYProgress} />
            ))}
            {w < words.length - 1 ? <span className="inline-block">&nbsp;</span> : null}
          </span>
        );
      })}
    </p>
  );
}
