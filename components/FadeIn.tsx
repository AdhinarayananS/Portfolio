"use client";

import { motion } from "framer-motion";
import type { CSSProperties, ElementType, ReactNode } from "react";

const cache: Record<string, ReturnType<typeof motion.create>> = {};
const getTag = (as: string) => (cache[as] ??= motion.create(as as ElementType));

type Props = {
  children?: ReactNode;
  as?: string;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
  id?: string;
};

export default function FadeIn({ children, as = "div", delay = 0, duration = 0.7, x = 0, y = 30, ...rest }: Props) {
  const Tag = getTag(as) as ElementType;
  return (
    <Tag
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
