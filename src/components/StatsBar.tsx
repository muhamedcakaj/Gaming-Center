import { MonitorCheck, MonitorX, Laptop } from "lucide-react";

interface Props {
  total: number;
  busy: number;
}

function StatsBar({ total, busy }: Props) {
  const free = total - busy;

  return (
    <div className="grid grid-cols-3 gap-3 md:gap-6 mb-6 md:mb-8">
      {/* FREE - Muted Green/Teal */}
      <div className="bg-gray-900/70 border border-green-800/50 rounded-lg md:rounded-xl p-4 md:p-6 shadow-lg shadow-green-900/20 transition-all duration-300 hover:scale-[1.02]">
        <div className="flex items-center justify-center gap-2 mb-2">
          <MonitorCheck className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
          <span className="text-xs md:text-sm font-bold text-green-400 tracking-widest uppercase">
            FREE
          </span>
        </div>
        <p className="text-3xl md:text-4xl font-black text-center text-green-200">
          {free}
        </p>
      </div>

      {/* BUSY - Muted Red/Maroon */}
      <div className="bg-gray-900/70 border border-red-800/50 rounded-lg md:rounded-xl p-4 md:p-6 shadow-lg shadow-red-900/20 transition-all duration-300 hover:scale-[1.02]">
        <div className="flex items-center justify-center gap-2 mb-2">
          <MonitorX className="w-5 h-5 md:w-6 md:h-6 text-red-600" />
          <span className="text-xs md:text-sm font-bold text-red-400 tracking-widest uppercase">
            BUSY
          </span>
        </div>
        <p className="text-3xl md:text-4xl font-black text-center text-red-200">
          {busy}
        </p>
      </div>

      {/* TOTAL - Neutral/Gold Accent */}
      <div className="bg-gray-900/70 border border-amber-800/50 rounded-lg md:rounded-xl p-4 md:p-6 shadow-lg shadow-amber-900/20 transition-all duration-300 hover:scale-[1.02]">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Laptop className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />
          <span className="text-xs md:text-sm font-bold text-amber-400 tracking-widest uppercase">
            TOTAL
          </span>
        </div>
        <p className="text-3xl md:text-4xl font-black text-center text-amber-200">
          {total}
        </p>
      </div>
    </div>
  );
}

export default StatsBar;