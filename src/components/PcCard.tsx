import { Monitor } from "lucide-react";

interface Props {
  pcNumber: number;
  isBusy: boolean;
}

function PcCard({ pcNumber, isBusy }: Props) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-lg md:rounded-xl p-4 md:p-6
        bg-gray-900/70 border transition-all duration-300
        hover:scale-[1.02] hover:shadow-xl cursor-pointer group
        ${
          isBusy
            ? "border-red-800/50 shadow-lg shadow-red-900/20 hover:shadow-red-900/40"
            : "border-green-800/50 shadow-lg shadow-green-900/20 hover:shadow-green-900/40"
        }
      `}
    >
      {/* Subtle corner detail instead of bright gradient */}
     <div className="absolute left-0 top-0 h-full w-[3px] bg-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />


      <div className="relative z-10">
        <div className="flex justify-center mb-3">
          <Monitor
            className={`w-10 h-10 md:w-14 md:h-14 transition-all duration-300 ${
              isBusy
                ? "text-red-600" // Muted red
                : "text-green-600" // Muted green
            }`}
          />
        </div>

        <div className="text-center mb-2">
          <span
            className={`text-xs font-bold tracking-widest uppercase ${
              isBusy ? "text-red-400" : "text-green-400"
            }`}
          >
            PC
          </span>
          <h2
            className={`text-3xl md:text-4xl font-black ${
              isBusy ? "text-red-200" : "text-green-200"
            }`}
          >
            {pcNumber}
          </h2>
        </div>

        <div
          className={`
          text-center text-xs md:text-sm font-bold tracking-wider py-2 rounded-md
          ${
            isBusy
              ? "bg-red-900/30 text-red-400 border border-red-800/50"
              : "bg-green-900/30 text-green-400 border border-green-800/50"
          }
        `}
        >
          {isBusy ? "BUSY" : "FREE"}
        </div>
      </div>

      {/* Removed the black overlay for a cleaner look */}
    </div>
  );
}

export default PcCard;
