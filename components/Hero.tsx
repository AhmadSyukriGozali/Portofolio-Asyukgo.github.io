export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute right-0 top-32 -z-10 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px]" />

      <div className="mx-auto w-full max-w-6xl px-6 pt-24">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            Portofolio Pribadi 
          </div>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
            Ahmad Syukri
            <br />
            <span className="text-cyan-400">Gozali.</span>
          </h1>

          <h2 className="mt-6 text-xl font-medium text-slate-300 sm:text-2xl">
            Teknik Informatika — Universitas Bina Sarana Informatika
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Saya adalah mahasiswa Teknik Informatika semester 7 yang sedang
            mengembangkan kemampuan di bidang software development dan
            teknologi web. Saya tertarik mempelajari bagaimana sebuah aplikasi
            dirancang, dikembangkan, dan di-deploy hingga dapat digunakan
            secara nyata.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-400"
            >
              Lihat Project
            </a>

            <a
              href="https://github.com/AhmadSyukriGozali"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/15 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-400"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}