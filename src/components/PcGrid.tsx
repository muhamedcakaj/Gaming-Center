import { useEffect, useState } from "react";
import { getBusyPcs } from "../services/pcStatusService";
import PcCard from "./PcCard";
import StatsBar from "./StatsBar";

const TOTAL_PCS = 50;

function PcGrid() {
  const [busyPcs, setBusyPcs] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadData = async () => {
    try {
      const data = await getBusyPcs();
      setBusyPcs(data.map((p) => p.pcNumber));
    } catch (error) {
      console.error("Error loading PC status:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 25000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-400 font-medium">Loading PC status...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <StatsBar total={TOTAL_PCS} busy={busyPcs.length} />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4 lg:gap-6">
        {Array.from({ length: TOTAL_PCS }, (_, i) => {
          const pc = i + 1;
          return (
            <PcCard key={pc} pcNumber={pc} isBusy={busyPcs.includes(pc)} />
          );
        })}
      </div>
    </>
  );
}

export default PcGrid;