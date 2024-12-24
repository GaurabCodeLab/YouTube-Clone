import VideoContainer from "../components/VideoContainer";
import { BUTTONS } from "../utils/constants";

const Home = () => {
  return (
    <div>
      <div className="py-3 flex gap-3 items-start overflow-auto">
        {BUTTONS.map((value, index) => (
          <button
            className={`px-4 py-1 ${
              index === 0 ? "bg-black text-white" : "bg-[#E5E5E5]"
            } rounded-md`}
          >
            {value}
          </button>
        ))}
      </div>
      <VideoContainer />
    </div>
  );
};

export default Home;
