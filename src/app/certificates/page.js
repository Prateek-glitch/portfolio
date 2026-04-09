import CertificateGrid from '../../components/CertificateGrid';

export default function CertificatesPage() {
  return (
    <section className="max-w-7xl mx-auto mt-24 px-6 pb-24">
      <h1 className="text-5xl font-extrabold text-center text-white mb-16 tracking-widest uppercase">
        Certificates
      </h1>
      <CertificateGrid />
    </section>
  );
}