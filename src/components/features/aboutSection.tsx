import { Link } from "react-router";

import SectionTitle from "@/components/common/sectionTitle";

const technologies = [
  "HTML & CSS",
  "Tailwind CSS",
  "TypeScript",
  "React",
  "MySQL",
];

export default function AboutSection() {
  return (
    <section className="py-14">

      <div className="mx-auto w-full max-w-[1000px] px-6 md:px-0">

        {/* ABOUT ME */}
        <SectionTitle>
          About Me
        </SectionTitle>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">

          <article className="rounded-[9px] bg-[#9eadae] p-4 text-[13px] leading-[1.25] shadow-[-6px_6px_0px_#294f50]">

            <p>
              Hi! I am{" "}
              <strong>Kyle Niño Descallar</strong>.
              I am a BSIT student at{" "}
              <strong>Cordova Public College</strong>.
              I enjoy learning about technology and
              creating simple, useful, and creative web
              projects. I continue improving my skills
              through practice and personal projects.
            </p>

          </article>

          <article className="rounded-[9px] bg-[#294f50] p-4 text-[13px] leading-[1.25] text-[#eeeeee] shadow-[-6px_6px_0px_#9eadae]">

            <p>
              I am passionate about web development and
                I am always looking for new challenges
            </p>

          </article>

        </div>

        {/* EDUCATION */}
        <SectionTitle>
          Education
        </SectionTitle>

        <div className="mb-12 grid grid-cols-2 gap-5 md:grid-cols-4">

          <div className="flex h-[58px] items-center justify-center rounded-lg bg-[#9eadae] text-xs font-bold shadow-md">
            Cordova Central School
          </div>

          <div className="flex h-[58px] items-center justify-center rounded-lg bg-[#294f50] text-xs font-bold text-white shadow-md">
            Babag National High School
          </div>

          <div className="flex h-[58px] items-center justify-center rounded-lg bg-[#9eadae] text-xs font-bold shadow-md">
            Babag National High School  
          </div>

          <div className="flex h-[58px] items-center justify-center rounded-lg bg-[#294f50] text-xs font-bold text-white shadow-md">
            Cordova Public College
          </div>

        </div>

        {/* TECH STACK */}
        <SectionTitle>
          Tech Stack
        </SectionTitle>

        <div className="mb-10 flex flex-wrap justify-center gap-5 md:justify-between">

          {technologies.map((tech) => (
            <span
              key={tech}
              className="min-w-[105px] rounded-full bg-[#9eadae] px-4 py-2 text-center text-[12px] font-bold shadow-md"
            >
              {tech}
            </span>
          ))}

        </div>

        {/* CTA */}
        <div className="rounded-[9px] bg-gradient-to-r from-[#8fa5a6] via-[#294f50] to-[#688486] px-5 py-5 text-center text-white shadow-md">

          <p className="mb-4 leading-[1.1]">
            I want to improve my programming skills,
            gain practical
            <br className="hidden md:block" />
            experience, and develop modern, responsive
          </p>

          <Link
            to="/contacts"
            className="rounded-lg bg-[#9eadae] px-5 py-1 text-sm font-bold shadow-sm transition hover:opacity-80"
          >
            Contacts
          </Link>

        </div>

      </div>

    </section>
  );
}