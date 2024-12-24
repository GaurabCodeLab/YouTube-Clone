import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../redux/toggleSlice";

const VideoContainer = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(YOUTUBE_API);
      const result = await response.json();
      setData(result.items);
    };
    fetchData();
  }, []);
  const handleClick = (id) => {
    navigate(`/watch?v=${id}`);
    dispatch(closeSideBar());
  };

  console.log(data[0]);
  return (
    <div className="grid grid-cols-3 gap-2">
      {data.length &&
        data.map((value) => (
          <div
            className="p-4 rounded-md cursor-pointer"
            onClick={() => handleClick(value.id)}
          >
            <img
              src={value.snippet.thumbnails.medium.url}
              alt="thumbnail"
              className="rounded-lg cursor-pointer"
            />
            <div className="text-lg font-medium my-2">
              {value.snippet.title}
            </div>
            <div className="text-[rgb(96, 96, 96)] text-sm">
              {value.snippet.channelTitle}
            </div>
            <div className="text-[rgb(96, 96, 96)] text-sm">
              {value.statistics.viewCount} views
            </div>
          </div>
        ))}
    </div>
  );
};

export default VideoContainer;
