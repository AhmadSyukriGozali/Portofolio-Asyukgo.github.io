export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Contact
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
          Hubungi Saya.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Jika ingin berdiskusi mengenai project, teknologi, atau peluang
          kolaborasi, silakan hubungi saya melalui email atau GitHub.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:ahmaddoang0809@gmail.com"
            className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-400"
          >
            Email Me
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
    </section>
  );
}