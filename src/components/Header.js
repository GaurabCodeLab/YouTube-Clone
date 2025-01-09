import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { YOUTUBE_LOGO } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../redux/toggleSlice";
import { useNavigate } from "react-router-dom";
import { YOUTUBE_SUGGESTION_API } from "../utils/constants";
import { addCache } from "../redux/cacheSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [queryResult, setQueryResult] = useState([]);
  const [showQueryResult, setShowQueryResult] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cacheResult = useSelector((store) => store.cacheReducer.searchResults);

  useEffect(() => {
    let timer;
    if (cacheResult && cacheResult[searchQuery]) {
      setQueryResult(cacheResult[searchQuery]);
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fetchQueryData();
      }, 200);
    }
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const fetchQueryData = async () => {
    try {
      const response = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const result = await response.json();
      setQueryResult(result[1]);
      dispatch(addCache({ [result[0]]: result[1] }));
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="shadow-md grid grid-flow-col fixed z-[999999] bg-white w-full h-[12vh]">
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
          onClick={() => navigate("/")}
        />
      </div>
      <div className="col-span-8 flex items-center relative">
        <input
          type="text"
          className="w-[70%] h-1/2 rounded-tl-full rounded-bl-full border ps-4"
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowQueryResult(true)}
          onBlur={() => setShowQueryResult(false)}
        />
        <button className="border h-1/2 px-4 rounded-tr-full rounded-br-full bg-slate-200">
          <IoIosSearch />
        </button>
        {queryResult.length > 0 && showQueryResult && (
          <div className="absolute top-[80%] bg-white w-[70%] rounded-md border flex flex-col py-2">
            {queryResult.map((value) => (
              <div
                className="flex gap-3 hover:bg-[#F2F2F2] ps-5 py-2"
                key={value}
              >
                <div className="self-center">
                  <IoIosSearch />
                </div>
                <div>{value}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="self-center flex justify-end pe-5 col-span-2">
        <IoPersonCircleSharp className="text-3xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
