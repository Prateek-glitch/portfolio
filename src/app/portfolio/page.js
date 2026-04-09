import ProjectGrid from '../../components/ProjectGrid';

export default function PortfolioPage() {
  return (
    <section className="max-w-6xl mx-auto mt-24 px-6">
      <h1 className="text-5xl font-extrabold text-center text-white mb-16 tracking-widest uppercase">
        Portfolio
      </h1>
      <ProjectGrid />
    </section>
  );
}