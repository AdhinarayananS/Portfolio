"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import FadeIn from "./FadeIn";
import LiveProjectButton from "./LiveProjectButton";
import { projects } from "@/lib/data";
import { PROJECT_IMAGES } from "@/lib/images";

const R = "rounded-[40px] sm:rounded-[50px] md:rounded-[60px]";
const H1 = "clamp(130px, 16vw, 230px)";
const H2 = "clamp(160px, 22vw, 340px)";

function Card({ p, i, total, progress }: { p: (typeof projects)[number]; i: number; total: number; progress: MotionValue<number> }) {
  const imgs = PROJECT_IMAGES[i % PROJECT_IMAGES.length];
  const targetScale = 1 - (total - 1 - i) * 0.03;
  const scale = useTransform(progress, [i / total, 1], [1, targetScale]);

  return (
    <div className="h-[85vh]">
      <div className="sticky top-24 md:top-32">
        <motion.div
          className={`relative border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 ${R}`}
          style={{ scale, top: i * 28, transformOrigin: "top center" }}
        >
          <div className="mb-4 flex flex-wrap items-center justify-between gap-4 sm:mb-6">
            <div className="flex items-center gap-4 sm:gap-8">
              <span className="font-black text-[#D7E2EA]" style={{ fontSize: "clamp(3rem, 10vw, 140px)", lineHeight: 1 }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col text-[#D7E2EA]">
                <span className="font-light uppercase tracking-widest opacity-60" style={{ fontSize: "clamp(0.75rem, 1.2vw, 1rem)" }}>
                  {p.category}
                </span>
                <h3 className="font-medium uppercase" style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}>{p.name}</h3>
              </div>
            </div>
            <LiveProjectButton label="Live Project" />
          </div>

          <ul className="mb-4 flex flex-wrap gap-2 sm:mb-6" aria-label="Technologies">
            {p.stack.map((t) => (
              <li key={t} className="rounded-full border border-[#D7E2EA]/40 px-3 py-1 font-light text-[#D7E2EA]" style={{ fontSize: "clamp(0.65rem, 1.1vw, 0.95rem)" }}>
                {t}
              </li>
            ))}
          </ul>

          <div className="flex gap-3">
            <div className="flex flex-col gap-3" style={{ width: "40%" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imgs[0]} alt={`${p.name} preview 1`} loading="lazy" className={`w-full object-cover ${R}`} style={{ height: H1 }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imgs[1]} alt={`${p.name} preview 2`} loading="lazy" className={`w-full object-cover ${R}`} style={{ height: H2 }} />
            </div>
            <div style={{ width: "60%" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imgs[2]}
                alt={`${p.name} preview 3`}
                loading="lazy"
                className={`w-full object-cover ${R}`}
                style={{ height: `calc(${H1} + ${H2} + 12px)` }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn>
        <h2
          className="hero-heading mb-16 text-center font-black uppercase tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)", lineHeight: 1 }}
        >
          Project
        </h2>
      </FadeIn>
      <div ref={ref} className="mx-auto max-w-7xl">
        {projects.map((p, i) => (
          <Card key={p.name} p={p} i={i} total={projects.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
