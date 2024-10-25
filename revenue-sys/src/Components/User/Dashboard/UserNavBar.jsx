import { FaMessage } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
<GiHamburgerMenu />;

function UserNavBar() {
  return (
    <nav className="fixed top-0 bg-[#fff] h-16 flex items-center w-full shadow z-10">
    <img
      src="https://app.xtocast.com/assets/img/logo-full.png"
      alt=""
      className="nav-img absolute left-4 md:block hidden"
    />
    <div className="md:hidden block absolute left-4 hover:bg-[#e8eff9] p-2 rounded-full cursor-pointer">
      <GiHamburgerMenu />
    </div>
    <div className="flex absolute md:right-72 right-6 gap-8 p-2 items-center justify-center">
      <div className="relative  p-4">
        <div className=" w-1 h-1 flex items-center justify-center p-[10px] text-[#fff] text-center bg-green-600 rounded-full absolute top-0 right-2 text-sm">
          2
        </div>
        <FaMessage className="text-[1.2rem]" />
      </div>
      <div className="relative  p-4">
        <div className=" w-1 h-1 flex items-center justify-center p-[10px] text-[#fff] text-center bg-red-500 rounded-full absolute top-1 right-3 text-sm">
          1
        </div>
        <IoIosNotifications className="text-[1.5rem]" />
      </div>
    </div>
  </nav>
  )
}

export default UserNavBar