export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  file: string;
  credentialUrl?: string;
  featured: boolean;
};

export const certificates: Certificate[] = [
  {
    id: "certificate-01",
    title: "PCAP: Programming Essentials in Python",
    issuer: "Cisco Networking Academy bekerja sama dengan OpenEDG Python Institute",
    date: "19 Jul 2024",
    file: "/certificates/Sertifikat_Python-AHMAD_SYUKRI_GOZALI.pdf",
    credentialUrl: "",
    featured: true,
  },

  {
    id: "certificate-02",
    title: "Sertifikat IT Bootcamp \"Transformasi Digital : Integrasi IoT & Kecerdasan Buatan Untuk Solusi Masa Depan\"",
    issuer: "Universitas Bina Sarana Informatika (Fakultas Teknik & Informatika)",
    date: "14 Juli 2025 s/d 15 Juli 2025",
    file: "/certificates/Sertifikat_IT_Bootcamp-AHMAD_SYUKRI_GOZALI.pdf",
    credentialUrl: "",
    featured: true,
  },

  {
    id: "certificate-03",
    title: "Sertifikat Workshop Pengolahan Data & Machine Learning Untuk Riset & Industri",
    issuer: "Universitas Bina Sarana Informatika (Fakultas Teknik & Informatika - Program Studi Informatika)",
    date: "4 Desember 2025",
    file: "/certificates/Pengolahan_Data_&_Machine_Learning_Untuk_Riset_&_Industri-AHMAD_SYUKRI_GOZALI.pdf",
    credentialUrl: "",
    featured: true,
  },

  {
    id: "certificate-04",
    title: "Sertifikat Workshop Machine Learning (Programming)",
    issuer: "Universitas Bina Sarana Informatika (Fakultas Teknik & Informatika)",
    date: "26 Juni 2025",
    file: "/certificates/Sertifikat_Machine_Learning(Programming)-AHMAD_SYUKRI_GOZALI.pdf",
    credentialUrl: "",
    featured: false,
  },

  {
    id: "certificate-05",
    title: "Sertifikat Workshop Penulisan Karya Ilmiah",
    issuer: "Universitas Bina Sarana Informatika (Fakultas Teknik & Informatika - Program Studi Informatika)",
    date: "9 Juli 2026",
    file: "/certificates/Workshop_Penulisan_Karya_Ilmiah-AHMAD_SYUKRI_GOZALI.pdf",
    credentialUrl: "",
    featured: false,
  },
];