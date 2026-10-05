export default function About() {
  return (
    <section id="about" className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              About Me
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Mengenal saya lebih dekat.
            </h2>
          </div>

          <div className="space-y-6 text-slate-400">
            <p className="text-lg leading-8">
              Saya Ahmad Syukri Gozali, Mahasiswa Program Studi
              Teknik Informatika di Universitas Bina Sarana Informatika.
            </p>

            <p className="leading-8">
              Saat ini saya sedang memperkuat kemampuan dalam pengembangan
              software, khususnya pengembangan aplikasi web dan teknologi
              modern yang digunakan dalam proses development.
            </p>

            <p className="leading-8">
              Saya percaya kemampuan programming tidak cukup hanya dipelajari
              melalui teori. Karena itu, saya menggunakan berbagai project
              sebagai sarana untuk memahami proses pengembangan aplikasi dari
              perancangan hingga implementasi.
            </p>

            <div className="grid gap-4 pt-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm text-slate-500">Pendidikan</p>
                <p className="mt-2 font-semibold text-white">
                  Teknik Informatika
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm text-slate-500">Status</p>
                <p className="mt-2 font-semibold text-white">
                  MAHASISWA 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}