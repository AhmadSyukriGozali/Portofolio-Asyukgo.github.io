const skillGroups = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Teknologi yang saya gunakan untuk membangun interface dan aplikasi web modern.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Python",
    ],
  },
  {
    number: "02",
    title: "Backend & Database",
    description:
      "Teknologi yang saya pelajari untuk membangun logic aplikasi, API, dan pengelolaan database.",
    skills: ["Node.js", "REST API", "PostgreSQL", "Supabase"],
  },
  {
    number: "03",
    title: "Development Tools",
    description:
      "Tools yang membantu saya dalam proses coding, version control, dan deployment.",
    skills: ["Git", "GitHub", "VS Code", "Vercel"],
  },
  {
    number: "04",
    title: "Other Skills",
    description:
      "Bidang teknologi lain yang sedang saya eksplorasi melalui project dan pembelajaran.",
    skills: [
      "Machine Learning",
      "Integrasi IoT & AI",
      "Pengolahan Data",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-white/10 py-24 sm:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 -z-10 h-72 w-72 rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Skills
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Teknologi yang saya gunakan
            <br className="hidden sm:block" />
            dan sedang saya pelajari.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Saya terus mengembangkan kemampuan teknis melalui project,
            eksperimen, dan proses belajar secara langsung.
          </p>
        </div>

        {/* Skill cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-cyan-950/20 sm:p-8"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/5 blur-3xl transition duration-500 group-hover:bg-cyan-400/10" />

              {/* Card header */}
              <div className="relative flex items-start justify-between gap-6">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                    <span className="text-sm font-bold text-cyan-400">
                      ◈
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {group.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
                    {group.description}
                  </p>
                </div>

                <span className="shrink-0 text-sm font-medium tracking-widest text-slate-600 transition duration-300 group-hover:text-cyan-400/60">
                  {group.number}
                </span>
              </div>

              {/* Divider */}
              <div className="my-7 h-px bg-white/10" />

              {/* Skills */}
              <div className="relative flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-xl border border-white/10 bg-slate-950/70 px-3.5 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-10 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.03] px-6 py-5 sm:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-6 text-slate-400">
              <span className="font-semibold text-cyan-400">
                Currently learning:
              </span>{" "}
              modern web development, backend architecture, database
              management, dan deployment.
            </p>

            <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
              Always Learning
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}