export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 py-24 sm:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-14 text-center shadow-2xl shadow-cyan-950/10 sm:px-10 sm:py-20">
          {/* Decorative grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[100px]" />

          <div className="relative">
            {/* Label */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-medium text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Let&apos;s Connect
            </div>

            {/* Heading */}
            <h2 className="mx-auto mt-7 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Let&apos;s build something
              <span className="text-cyan-400"> meaningful.</span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Jika ingin berdiskusi mengenai project, teknologi,
              kolaborasi, atau peluang lainnya, saya terbuka untuk
              terhubung dan berdiskusi.
            </p>

            {/* Contact actions */}
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="mailto:ahmaddoang0809@gmail.com"
                className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-6 py-3.5 font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                Email Me
                <span className="ml-2">↗</span>
              </a>

              <a
                href="https://github.com/AhmadSyukriGozali"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] px-6 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:text-cyan-400"
              >
                GitHub
                <span className="ml-2">↗</span>
              </a>
            </div>

            {/* Contact information */}
            <div className="mx-auto mt-12 flex max-w-2xl flex-col items-center justify-center gap-5 border-t border-white/10 pt-8 text-sm sm:flex-row sm:gap-8">
              <div className="flex items-center gap-3 text-slate-400">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-cyan-400">
                  @
                </span>

                <span>ahmaddoang0809@gmail.com</span>
              </div>

              <div className="hidden h-5 w-px bg-white/10 sm:block" />

              <div className="flex items-center gap-3 text-slate-400">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-cyan-400">
                  GH
                </span>

                <span>AhmadSyukriGozali</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}