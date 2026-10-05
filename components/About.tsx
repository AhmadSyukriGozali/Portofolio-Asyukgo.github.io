export default function About() {
  return (
    <section
      id="about"
      className="border-t border-white/10 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              About Me
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Mengenal saya
              <br />
              lebih dekat.
            </h2>
          </div>

          {/* Description */}
          <div className="space-y-5">
            <p className="text-lg leading-8 text-slate-300">
              Saya Ahmad Syukri Gozali, Mahasiswa Teknik Informatika
              di Universitas Bina Sarana Informatika yang memiliki
              ketertarikan pada dunia software development.
            </p>

            <p className="leading-8 text-slate-400">
              Saat ini saya sedang memperkuat kemampuan dalam pengembangan
              aplikasi web, database, dan teknologi modern yang digunakan
              dalam proses pengembangan software.
            </p>

            <p className="leading-8 text-slate-400">
              Bagi saya, proses belajar programming tidak hanya berasal
              dari teori. Saya lebih banyak belajar dengan membangun
              project, menyelesaikan masalah, dan memahami bagaimana
              sebuah aplikasi bekerja dari sisi frontend hingga backend.
            </p>
          </div>
        </div>

        {/* Information cards */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Education */}
          <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-xl">
              🎓
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Education
            </p>

            <h3 className="mt-2 text-lg font-semibold text-white">
              Teknik Informatika
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Universitas Bina Sarana Informatika
            </p>
          </div>

          {/* Status */}
          <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-xl">
              💻
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Status
            </p>

            <h3 className="mt-2 text-lg font-semibold text-white">
              Informatics Student
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Semester 7 · Aktif belajar dan membangun project
            </p>
          </div>

          {/* Focus */}
          <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-xl">
              🚀
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Current Focus
            </p>

            <h3 className="mt-2 text-lg font-semibold text-white">
              Web Development
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Frontend, backend, database, dan deployment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}