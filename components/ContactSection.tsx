"use client";

import FadeIn from "./FadeIn";
import { profile } from "@/lib/data";

const pill =
  "inline-block rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base";

export default function ContactSection() {
  return (
    <section id="contact" className="flex flex-col items-center gap-10 px-5 pb-16 pt-10 text-center sm:px-8 md:px-10">
      <FadeIn>
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight" style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}>
          Contact
        </h2>
      </FadeIn>
      <FadeIn delay={0.1}>
        <a
          href={`mailto:${profile.email}`}
          className="break-all font-medium text-[#D7E2EA] underline underline-offset-8 transition-opacity hover:opacity-70"
          style={{ fontSize: "clamp(1.1rem, 3vw, 2.2rem)" }}
        >
          {profile.email}
        </a>
      </FadeIn>
      <FadeIn delay={0.2} className="flex flex-wrap justify-center gap-4">
        <a className={pill} href={`https://wa.me/${profile.phoneRaw}`} target="_blank" rel="noreferrer">WhatsApp</a>
        <a className={pill} href={`tel:+${profile.phoneRaw}`}>{profile.phone}</a>
        <a className={pill} href={profile.resume} download>Resume</a>
      </FadeIn>
      <p className="font-light uppercase tracking-widest text-[#D7E2EA] opacity-60" style={{ fontSize: "clamp(0.7rem, 1.2vw, 1rem)" }}>
        {profile.name} · {profile.location}
      </p>
    </section>
  );
}
