import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute right-0 top-24 -z-10 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          
          {/* LEFT CONTENT */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              Portofolio Pribadi
            </div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              Hello, I'm
            </p>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
              Ahmad Syukri
              <br />
              <span className="text-cyan-400">Gozali.</span>
            </h1>

            <h2 className="mt-7 text-xl font-medium text-slate-300 sm:text-2xl">
              Informatics Student & Software Developer
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Mahasiswa Teknik Informatika yang sedang mengembangkan
              kemampuan di bidang software development, web development,
              dan teknologi modern.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-cyan-500 px-6 py-3.5 font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                Lihat Project
              </a>

              <a
                href="https://github.com/AhmadSyukriGozali"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/15 px-6 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
              >
                GitHub
              </a>
            </div>

            {/* Small information */}
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-slate-500">
              <span>🎓 Teknik Informatika</span>
              <span>📍 Indonesia</span>
              <span>💻 Open to Opportunities</span>
            </div>
          </div>

          {/* RIGHT PROFILE */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Outer glow */}
            <div className="absolute h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative">
              {/* Profile frame */}
              <div className="relative h-72 w-72 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-2 shadow-2xl shadow-cyan-950/30 sm:h-80 sm:w-80">
                <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/images/profile/Foto_BG_Biru.png"
                    alt="Ahmad Syukri Gozali"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 640px) 288px, 320px"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-slate-900/90 px-5 py-4 shadow-xl backdrop-blur-xl">
                <p className="text-xs text-slate-500">
                  Currently
                </p>

                <p className="mt-1 font-semibold text-white">
                  Learning & Building
                </p>
              </div>

              {/* Decorative element */}
              <div className="absolute -right-4 -top-4 h-16 w-16 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}