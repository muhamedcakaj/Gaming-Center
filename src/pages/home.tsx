import Header from "../components/Header";
import PcGrid from "../components/PcGrid";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.15),transparent_50%)] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 py-6 md:py-12 max-w-7xl">
        <Header />
        <PcGrid />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
    </div>
  );
}

export default Home;
