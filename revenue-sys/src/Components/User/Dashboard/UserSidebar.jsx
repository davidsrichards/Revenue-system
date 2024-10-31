import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FaBriefcase } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";
import { MdAccessTime, MdLogout } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import GlobalSidebar from "../../Admin/GlobalComponent/GlobalSidebar";



function UserSidebar() {
  return (
    <div className="h-screen flex-1 md:w-64 w-0 fixed transition-al top-0 duration-300 ease-in-out overflow-auto bg-black text-[#fff] py-8">
      <ul className="h-auto">
       
        <GlobalSidebar icon={<FaBriefcase />} title={"Make Payment"} to={"/user-dashboard/user-payment"}/>
        <GlobalSidebar icon={<MdOutlinePayment />} title={"view Invoice"}  to={"/user-dashboard/user-invoice"}/>
        <GlobalSidebar icon={<CgMenuGridO />} title={"Generate Invoice"}  to={"/user-dashboard/user-generate-invoice"}/>
        <GlobalSidebar icon={< MdLogout />} title={"Log Out"} to={'/'}/>
      </ul>
    </div>
  )
}

export default UserSidebar