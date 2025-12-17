import {
  Headset,
  Skull,
  Wifi,
  Cpu,
  Monitor,
  Activity,
  Calendar,
  Crown,
} from "lucide-react";

function Header() {
  return (
    <header className="text-center mb-10 md:mb-14 animate-fade-in">

      {/* BRAND */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <Headset className="w-9 h-9 md:w-12 md:h-12 text-amber-500" />
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-100">
          MVP GAMING
        </h1>
        <Skull className="w-9 h-9 md:w-12 md:h-12 text-amber-500" />
      </div>

      {/* STATEMENT */}
      <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-400 mb-8 leading-relaxed">
        A premium competitive gaming center built for serious players.
        High-end hardware, professional environment, and transparent pricing.
      </p>

      {/* PRICING */}
      <div className="max-w-xl mx-auto mb-8 rounded-2xl border border-slate-700 bg-slate-900/60 backdrop-blur-xl">
        <div className="grid grid-cols-2 text-sm">
          <div className="p-4 border-r border-slate-700">
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-1">
              Standard
            </p>
            <p className="text-2xl font-bold text-gray-100">
              €0.70 <span className="text-sm text-gray-400">/ hour</span>
            </p>
          </div>
          <div className="p-4">
            <p className="text-xs tracking-widest uppercase text-amber-500 mb-1">
              VIP
            </p>
            <p className="text-2xl font-bold text-gray-100">
              €1.00 <span className="text-sm text-gray-400">/ hour</span>
            </p>
          </div>
        </div>
      </div>

      {/* TECHNICAL SPECS — KEPT */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-300 mb-6">
        <div className="flex items-center gap-2">
          <Cpu className="w-5 h-5 text-amber-600" />
          <span className="font-semibold text-sm md:text-base">
            Ryzen 7 9800X3D
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-gray-400" />
          <span className="font-semibold text-sm md:text-base">
            RTX 5070 / RTX 4090
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Monitor className="w-5 h-5 text-amber-600" />
          <span className="font-semibold text-sm md:text-base">
            500Hz / 600Hz Monitors
          </span>
        </div>
      </div>

      {/* CREDENTIALS */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-400 text-sm">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-amber-600" />
          <span>Operating since 2023</span>
        </div>
        <div className="flex items-center gap-2">
          <Wifi className="w-4 h-4 text-amber-600" />
          <span>Low-latency competitive network</span>
        </div>
      </div>
    </header>
  );
}

export default Header;