"use client";

import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Layers3,
  Rocket,
  Terminal,
} from "lucide-react";

import { about } from "@/config/about";

const icons = {
  code: Code2,
  layers: Layers3,
  terminal: Terminal,
  rocket: Rocket,
} as const;

export default function AboutIntroSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-zinc-500/[0.08] blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/2 h-80 w-80 rounded-full bg-zinc-500/[0.08] blur-[110px]"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-500/20 bg-zinc-500/[0.08] px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-zinc-500"
            />
            {about.eyebrow}
          </span>

          <h2
            id="about-heading"
            className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl lg:text-6xl"
          >
            {about.heading}{" "}
            <span className="text-zinc-900 dark:text-white">
              {about.headingHighlight}
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {about.introduction}
          </p>
        </motion.div>

        {/* Main content and professional highlights */}
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.85fr] lg:gap-12">
          {/* Personal story */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65 }}
            className="space-y-5"
          >
            {about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-8 text-zinc-600 dark:text-zinc-400 sm:text-[17px]"
              >
                {paragraph}
              </p>
            ))}

            {/* Profile links */}
            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href={about.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-semibold text-zinc-800 transition hover:border-zinc-400 hover:text-zinc-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-200 dark:hover:text-zinc-300"
              >
                GitHub
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href={about.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-semibold text-zinc-800 transition hover:border-zinc-400 hover:text-zinc-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-200 dark:hover:text-zinc-300"
              >
                LinkedIn
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href={about.links.email}
                className="group inline-flex items-center gap-2 rounded-xl bg-zinc-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-zinc-500"
              >
                Get in touch
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </motion.div>

          {/* Professional summary */}
          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="space-y-5"
          >
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[about.experience, about.education].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-zinc-200/80 bg-white/80 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.035] sm:p-6"
                >
                  <p className="bg-gradient-to-r from-zinc-500 to-zinc-500 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Strengths */}
            <div className="rounded-2xl border border-zinc-200/80 bg-white/80 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.035] sm:p-6">
              <h3 className="mb-5 text-lg font-bold text-zinc-900 dark:text-white">
                What I bring to the table
              </h3>

              <div className="space-y-5">
                {about.strengths.map((strength, index) => {
                  const Icon =
                    icons[strength.icon as keyof typeof icons];

                  return (
                    <motion.div
                      key={strength.title}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.08,
                      }}
                      className="flex gap-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-500/10 text-zinc-600 dark:text-zinc-300">
                        <Icon size={19} />
                      </div>

                      <div>
                        <h4 className="font-semibold text-zinc-900 dark:text-white">
                          {strength.title}
                        </h4>
                        <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                          {strength.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.aside>
        </div>

        {/* Technology stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mt-12 rounded-2xl border border-zinc-200/80 bg-white/70 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.025] sm:p-7"
        >
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-500/10 text-zinc-600 dark:text-zinc-300">
              <Terminal size={20} />
            </div>

            <div>
              <h3 className="font-bold text-zinc-900 dark:text-white">
                Technologies I work with
              </h3>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                Tools and technologies across my development workflow.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {about.technologies.map((technology, index) => (
              <motion.span
                key={technology}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: Math.min(index * 0.025, 0.3),
                }}
                whileHover={{ y: -3 }}
                className="rounded-lg border border-zinc-200 bg-zinc-50 px-3.5 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400/50 hover:bg-zinc-500/[0.06] dark:border-white/10 dark:bg-white/[0.035] dark:text-zinc-300"
              >
                {technology}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex items-start gap-4 border-l-2 border-zinc-500 pl-5 sm:pl-7"
        >
          <div>
            <p className="max-w-3xl text-lg font-medium leading-8 text-zinc-800 dark:text-zinc-200">
              "{about.closing}"
            </p>
            <p className="mt-3 text-sm font-semibold text-zinc-600 dark:text-zinc-400">
              — Asif Ali Quraishi
            </p>
          </div>

          <ArrowDownRight
            size={24}
            className="ml-auto hidden shrink-0 text-zinc-500 sm:block"
          />
        </motion.div>
      </div>
    </section>
  );
}
