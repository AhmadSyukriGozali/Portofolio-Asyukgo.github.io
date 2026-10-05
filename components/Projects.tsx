export default function Projects() {
  return (
    <section id="projects" className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Projects
        </p>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Project yang sedang dibangun.
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-slate-400">
              Saya sedang mengembangkan dan mendokumentasikan berbagai
              project sebagai bagian dari proses belajar software development.
            </p>
          </div>

          <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-10 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-2xl text-cyan-400">
              &lt;/&gt;
            </div>

            <h3 className="mt-6 text-xl font-bold text-white">
              Project showcase sedang dipersiapkan
            </h3>

            <p className="mx-auto mt-4 max-w-md leading-7 text-slate-400">
              Project yang sudah selesai akan ditampilkan di sini lengkap
              dengan teknologi, screenshot, repository, dan live demo.
            </p>

            <a
              href="https://github.com/AhmadSyukriGozali"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-lg border border-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Lihat GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}