import { FaChartLine } from "react-icons/fa6";
import { MdOutlineShowChart } from "react-icons/md";
import { FaNairaSign } from "react-icons/fa6";


function GlobalStatistics({ title, amount, percent, date, chartcolor, color }) {
  return (
    <div className="bg-slate-300 p-2 rounded-md flex flex-col gap-2 items-center ring-2 ring-slate-400">
      <div className="flex items-center gap-4">
        <div className="flex flex-col gap-1">
          <div className="text-sm tracking-tight text-slate-500">{title}</div>
          <strong className="text-slate-600 flex items-center gap-2"><FaNairaSign/>  {amount}</strong>
        </div>
        <div className={`${chartcolor} p-2 rounded-lg text-sm`}>
          <FaChartLine />
        </div>
      </div>
      <div>
        <div className="flex items-center gap-1">
          <span className={`flex items-center text-sm gap-1 ${color}`}>
            <MdOutlineShowChart />
            <span>{percent}</span>
          </span>
          <span className="text-sm tracking-tight">{date}</span>
        </div>
      </div>
    </div>
  );
}

export default GlobalStatistics;
