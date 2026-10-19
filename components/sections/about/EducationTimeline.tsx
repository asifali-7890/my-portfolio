"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  education,
  codingJourney,
  educationAchievements,
} from "@/config/education";

export default function EducationTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 75%"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    mass: 0.3,
  });

  const achievement = educationAchievements[0];

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-32 h-72 w-72 -translate-x-1/2 rounded-full bg-zinc-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-500/20 bg-zinc-500/10 px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-300">
            <span aria-hidden="true">✦</span>
            The journey that shaped me
          </span>

          <h2
            id="education-heading"
            className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl"
          >
            My Educational{" "}
            <span className="bg-gradient-to-r from-zinc-500 to-zinc-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg">
            From my first classroom to a degree in Computer Science and
            Engineering — every chapter helped shape the engineer I am today.
          </p>
        </motion.div>

        <div ref={timelineRef} className="relative">
          {/* Timeline track */}
          <div
            aria-hidden="true"
            className="absolute bottom-6 left-[13px] top-6 w-px bg-zinc-200 dark:bg-white/10 md:left-1/2 md:-translate-x-1/2"
          />

          {/* Animated progress line */}
          <motion.div
            aria-hidden="true"
            style={{ scaleY: progress, originY: 0 }}
            className="absolute bottom-6 left-[13px] top-6 w-px bg-zinc-900 dark:bg-white md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-10 md:space-y-14">
            {education.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className="relative grid grid-cols-[28px_minmax(0,1fr)] gap-x-4 md:grid-cols-[minmax(0,1fr)_48px_minmax(0,1fr)] md:gap-x-5"
                >
                  {/* Milestone marker */}
                  <div className="relative z-10 col-start-1 row-start-1 flex justify-center md:col-start-2">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.7 }}
                      transition={{
                        type: "spring",
                        stiffness: 220,
                        damping: 16,
                      }}
                      className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-zinc-500 bg-white shadow-[0_0_20px_rgba(139,92,246,0.22)] dark:bg-zinc-950"
                    >
                      <span className="h-2 w-2 rounded-full bg-zinc-500" />
                    </motion.div>
                  </div>

                  {/* Education card */}
                  <motion.article
                    initial={{
                      opacity: 0,
                      x: isLeft ? -28 : 28,
                      y: 12,
                    }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className={[
                      "group col-start-2 row-start-1 min-w-0 rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-zinc-400/50 hover:shadow-xl hover:shadow-zinc-500/5 dark:border-white/10 dark:bg-zinc-900/70 sm:p-7",
                      isLeft ? "md:col-start-1" : "md:col-start-3",
                    ].join(" ")}
                  >
                    <div className="mb-5 flex items-start justify-between gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-zinc-500/15 bg-zinc-500/10 text-2xl">
                        {item.icon}
                      </div>

                      <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
                        {item.startDate} – {item.endDate}
                      </span>
                    </div>

                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-600 dark:text-zinc-400">
                      {item.detail}
                    </p>

                    <h3 className="text-lg font-bold leading-snug text-zinc-900 dark:text-white sm:text-xl">
                      {item.qualification}
                    </h3>

                    <p className="mt-2 font-medium text-zinc-700 dark:text-zinc-200">
                      {item.institution}
                    </p>

                    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                      {item.location}
                    </p>

                    <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                      {item.description}
                    </p>

                    {item.results.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.results.map((result) => (
                          <div
                            key={result.label}
                            className="rounded-xl border border-zinc-500/15 bg-zinc-500/5 px-3 py-2"
                          >
                            <span className="mr-2 text-xs text-zinc-500 dark:text-zinc-400">
                              {result.label}
                            </span>
                            <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300">
                              {result.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Coding origin story appears within the diploma period */}
                    {item.id === "diploma" && (
                      <div className="mt-6 rounded-xl border border-zinc-500/20 bg-gradient-to-br from-zinc-500/[0.07] to-zinc-500/[0.04] p-4 sm:p-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-600 dark:text-zinc-300">
                          {codingJourney.startDate} · The turning point
                        </p>

                        <h4 className="mt-2 font-bold text-zinc-900 dark:text-white">
                          {codingJourney.title}
                        </h4>

                        <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                          {codingJourney.description}
                        </p>

                        <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
                          Sunday lessons with {codingJourney.mentor}
                        </p>

                        <div className="mt-4">
                          <p className="mb-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                            First programming languages
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {codingJourney.languages.map((language) => (
                              <span
                                key={language}
                                className="rounded-md border border-zinc-200 bg-white px-2.5 py-1 text-xs font-medium text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300"
                              >
                                {language}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-4">
                          <p className="mb-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                            Modern development · Since {codingJourney.modernStackSince}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {codingJourney.modernStack.map((technology) => (
                              <span
                                key={technology}
                                className="rounded-md border border-zinc-500/20 bg-zinc-500/10 px-2.5 py-1 text-xs font-semibold text-zinc-700 dark:text-zinc-300"
                              >
                                {technology}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Verified achievement, linked to the original announcement */}
                    {item.id === "diploma" && achievement && (
                      <div className="mt-4 rounded-xl border border-zinc-500/25 bg-zinc-500/[0.06] p-4">
                        <div className="flex items-start gap-3">
                          <span
                            aria-hidden="true"
                            className="text-2xl"
                          >
                            🏆
                          </span>
                          <div className="min-w-0">
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-700 dark:text-zinc-300">
                              Academic achievement · {achievement.year}
                            </p>
                            <h4 className="mt-1 font-bold text-zinc-900 dark:text-white">
                              {achievement.title}
                            </h4>
                            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                              {achievement.description}
                            </p>
                            <a
                              href={achievement.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 underline decoration-zinc-400/40 underline-offset-4 transition hover:text-zinc-500 dark:text-zinc-300"
                            >
                              {achievement.sourceLabel}
                              <span aria-hidden="true">↗</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.article>
                </div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-2xl border border-zinc-500/20 bg-zinc-500/5 px-5 py-4 text-left">
            <span className="text-2xl" aria-hidden="true">
              ✨
            </span>
            <div>
              <p className="font-semibold text-zinc-900 dark:text-white">
                The learning never stops
              </p>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Every chapter laid the foundation for my continued journey in
                software engineering.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
