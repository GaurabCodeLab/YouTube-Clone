import { GiHamburgerMenu } from "react-icons/gi";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { YOUTUBE_LOGO } from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../redux/toggleSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="shadow-md grid grid-flow-col">
      <div className="flex gap-2 col-span-2">
        <div className="self-center ps-4">
          {" "}
          <GiHamburgerMenu
            className="text-xl cursor-pointer"
            onClick={() => dispatch(toggleSidebar())}
          />
        </div>
        <img
          src={YOUTUBE_LOGO}
          alt="youtube-logo"
          className="w-36 cursor-pointer"
        />
      </div>
      <div className="col-span-8 flex items-center">
        <input
          type="text"
          className="w-[70%] h-1/2 rounded-tl-full rounded-bl-full border ps-4"
        />
        <button className="border h-1/2 px-4 rounded-tr-full rounded-br-full bg-slate-200">
          <IoIosSearch />
        </button>
      </div>
      <div className="self-center flex justify-end pe-5 col-span-2">
        <IoPersonCircleSharp className="text-3xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
