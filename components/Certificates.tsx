"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { certificates } from "@/data/certificates";
import CertificateCard from "@/components/CertificateCard";
import CertificateModal from "@/components/CertificateModal";
import type { Certificate } from "@/data/certificates";

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  const closeModal = useCallback(() => {
    setSelectedCertificate(null);
  }, []);

  const featuredCertificates = certificates
    .filter((certificate) => certificate.featured)
    .slice(0, 3);

  return (
    <>
      <section
        id="certificates"
        className="relative scroll-mt-20 overflow-hidden border-t border-white/10 py-24 sm:py-28"
      >
        {/* Background decoration */}
        <div className="pointer-events-none absolute right-0 top-1/3 -z-10 h-80 w-80 rounded-full bg-cyan-500/5 blur-[140px]" />

        <div className="mx-auto max-w-6xl px-6">
          {/* Section heading */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Pencapaian
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                Sertifikat dan perjalanan belajar.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                Beberapa sertifikat unggulan yang saya peroleh melalui
                pelatihan, workshop, dan pembelajaran di bidang teknologi.
              </p>
            </div>

            <p className="shrink-0 text-sm text-slate-500">
              {certificates.length} sertifikat tersimpan
            </p>
          </div>

          {/* Featured certificates */}
          {featuredCertificates.length > 0 ? (
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {featuredCertificates.map((certificate) => (
                <CertificateCard
                  key={certificate.id}
                  certificate={certificate}
                  onClick={() => setSelectedCertificate(certificate)}
                />
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center text-slate-400">
              Belum ada sertifikat unggulan.
            </div>
          )}

          {/* View all certificates */}
          <div className="mt-10 flex justify-center">
            <Link
              href="/certificates"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-cyan-400/30 bg-cyan-400/5 px-6 py-3.5 text-sm font-semibold text-cyan-300 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/60 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-950/20"
            >
              Lihat Semua Sertifikat
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Certificate preview modal */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={closeModal}
      />
    </>
  );
}
