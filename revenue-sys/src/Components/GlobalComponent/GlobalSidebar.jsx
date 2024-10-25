import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function GlobalSidebar({ icon, title }) {
  return (
    <Link className="flex items-center hover:bg-[#1b1b29] px-3">
      <div className="flex items-center gap-3 sidebar-menu p-2 text-slate-400 font-semibold  w-full">
        {icon}
        <li className="p-2">{title}</li>
      </div>
      <MdOutlineKeyboardArrowRight className="text-[1.4rem]" />
    </Link>
  );
}

export default GlobalSidebar;
