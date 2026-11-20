"use client";

import FadeIn from "./FadeIn";
import AnimatedText from "./AnimatedText";
import ContactButton from "./ContactButton";

const A = "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/";
const TEXT =
  "With four years of experience in full stack development, i focus on role-based access, secure APIs, payments and real-time features, i truly enjoy working with teams that aim to build products people trust. Let's build something incredible together!";

const decor = [
  { src: "moon_icon.11395d36.png", cls: "w-[120px] sm:w-[160px] md:w-[210px] top-[4%] left-[1%] sm:left-[2%] md:left-[4%]", delay: 0.1, x: -80 },
  { src: "p59_1.4659672e.png", cls: "w-[100px] sm:w-[140px] md:w-[180px] bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]", delay: 0.25, x: -80 },
  { src: "lego_icon-1.703bb594.png", cls: "w-[120px] sm:w-[160px] md:w-[210px] top-[4%] right-[1%] sm:right-[2%] md:right-[4%]", delay: 0.15, x: 80 },
  { src: "Group_134-1.2e04f3ce.png", cls: "w-[130px] sm:w-[170px] md:w-[220px] bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]", delay: 0.3, x: 80 },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative flex min-h-screen items-center justify-center px-5 py-20 sm:px-8 md:px-10">
      {decor.map((d) => (
        <FadeIn key={d.src} className={`absolute ${d.cls}`} delay={d.delay} x={d.x} y={0} duration={0.9}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={A + d.src} alt="" className="h-auto w-full" />
        </FadeIn>
      ))}

      <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading text-center font-black uppercase leading-none tracking-tight"
              style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
            >
              About me
            </h2>
          </FadeIn>
          <AnimatedText
            text={TEXT}
            className="max-w-[560px] text-center font-medium leading-relaxed text-[#D7E2EA]"
            style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
          />
        </div>
        <ContactButton />
      </div>
    </section>
  );
}
