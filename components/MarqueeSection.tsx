"use client";

import { useEffect, useRef, useState } from "react";
import { MARQUEE } from "@/lib/images";

const ROW1 = MARQUEE.slice(0, 11);
const ROW2 = MARQUEE.slice(11);
const TILE = 420, GAP = 12;

function Row({ images, style }: { images: string[]; style: React.CSSProperties }) {
  const tripled = [...images, ...images, ...images];
  return (
    <div className="flex gap-3" style={{ willChange: "transform", ...style }}>
      {tripled.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={i} src={src} alt="" loading="lazy" className="rounded-2xl object-cover" style={{ width: TILE, height: 270, flex: "none" }} />
      ))}
    </div>
  );
}

export default function MarqueeSection() {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY;
      setOffset((window.scrollY - top + window.innerHeight) * 0.3);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section ref={ref} className="flex flex-col gap-3 bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40" style={{ overflow: "hidden" }}>
      {/* Row 1 starts one set to the left so picture is always on both sides while it travels right */}
      <Row images={ROW1} style={{ marginLeft: -(ROW1.length * (TILE + GAP)), transform: `translateX(${offset - 200}px)` }} />
      <Row images={ROW2} style={{ transform: `translateX(${-(offset - 200)}px)` }} />
    </section>
  );
}
