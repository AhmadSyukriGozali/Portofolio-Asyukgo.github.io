const skillGroups = [
  {
    title: "Web Development",
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
    title: "Backend & Database",
    skills: ["Node.js", "REST API", "PostgreSQL", "Supabase"],
  },
  {
    title: "Development Tools",
    skills: ["Git", "GitHub", "VS Code", "Vercel"],
  },
  {
    title: "Other Skills",
    skills: ["Machine Learning", "Integrasi IoT & Kecerdasan Buatan", "Pengolahan Data"],
  }
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Skills
        </p>

        <h2 className="mt-4 max-w-2xl text-3xl font-bold text-white sm:text-4xl">
          Teknologi yang sedang saya pelajari.
        </h2>

        <p className="mt-5 max-w-2xl leading-7 text-slate-400">
          Skill di bawah ini merepresentasikan teknologi yang saya gunakan
          atau sedang saya pelajari dalam proses pengembangan project.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-lg font-semibold text-white">
                {group.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-sm text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}