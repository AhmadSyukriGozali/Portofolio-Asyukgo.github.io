"use client";

import type { Certificate } from "@/data/certificates";

type CertificateCardProps = {
  certificate: Certificate;
  onClick: () => void;
};

export default function CertificateCard({
  certificate,
  onClick,
}: CertificateCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group w-full text-left"
      aria-label={`Lihat sertifikat ${certificate.title}`}
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-cyan-950/20">
        {/* PDF Preview */}
        <div className="relative h-72 overflow-hidden border-b border-white/10 bg-slate-900">
          <iframe
            src={`${certificate.file}#toolbar=0&navpanes=0&scrollbar=0`}
            title={`Preview ${certificate.title}`}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[140%] w-[100%] -translate-x-1/2 -translate-y-1/2 bg-white"
          />

          {/* Preview overlay */}
          <div className="absolute inset-0 bg-slate-950/0 transition duration-300 group-hover:bg-slate-950/30" />

          {/* View badge */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
            <span className="rounded-xl border border-white/15 bg-slate-950/80 px-4 py-2.5 text-sm font-semibold text-white shadow-xl backdrop-blur-xl">
              View Certificate ↗
            </span>
          </div>

          {/* PDF label */}
          <div className="absolute left-4 top-4 rounded-lg border border-white/10 bg-slate-950/80 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-cyan-400 backdrop-blur-xl">
            PDF
          </div>
        </div>

        {/* Certificate information */}
        <div className="p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            {certificate.issuer}
          </p>

          <h3 className="mt-3 line-clamp-2 text-lg font-semibold leading-7 text-white transition duration-300 group-hover:text-cyan-300">
            {certificate.title}
          </h3>

          <div className="mt-5 flex items-center justify-between gap-4">
            <span className="text-sm text-slate-500">
              {certificate.date}
            </span>

            <span className="text-sm font-medium text-slate-400 transition duration-300 group-hover:text-cyan-400">
              View PDF →
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}