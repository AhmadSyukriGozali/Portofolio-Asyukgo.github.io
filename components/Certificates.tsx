"use client";

import { useState } from "react";
import { certificates } from "@/data/certificates";
import CertificateCard from "@/components/CertificateCard";
import CertificateModal from "@/components/CertificateModal";
import type { Certificate } from "@/data/certificates";

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  // Ambil hanya sertifikat yang ditandai sebagai featured.
  // Maksimal 3 sertifikat ditampilkan di homepage.
  const featuredCertificates = certificates
    .filter((certificate) => certificate.featured)
    .slice(0, 3);

  return (
    <section
      id="certificates"
      className="relative overflow-hidden border-t border-white/10 py-24 sm:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-0 top-1/3 -z-10 h-80 w-80 rounded-full bg-cyan-500/5 blur-[140px]" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Certificates
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Learning never stops.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Beberapa sertifikat yang saya peroleh selama proses
              belajar dan mengembangkan kemampuan di bidang teknologi
              dan software development.
            </p>
          </div>

          {/* Certificate count */}
          <div className="shrink-0">
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-400">
              {certificates.length} Certificates
            </span>
          </div>
        </div>

        {/* Certificate cards */}
        {featuredCertificates.length > 0 ? (
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredCertificates.map((certificate) => (
              <CertificateCard
                key={certificate.id}
                certificate={certificate}
                onClick={() => setSelectedCertificate(certificate)}
              />
            ))}
          </div>
        ) : (
          <div className="mt-14 rounded-3xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-16 text-center">
            <p className="text-slate-500">
              Belum ada sertifikat yang ditampilkan.
            </p>
          </div>
        )}

        {/* View all button */}
        {certificates.length > 3 && (
          <div className="mt-10 flex justify-center">
            <a
              href="/certificates"
              className="inline-flex items-center rounded-xl border border-white/10 px-6 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:text-cyan-400"
            >
              View All Certificates
              <span className="ml-2">→</span>
            </a>
          </div>
        )}
      </div>

      {/* PDF Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </section>
  );
}