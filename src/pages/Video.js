import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleSidebar } from "../redux/toggleSlice";
import CommentContainer from "../components/CommentContainer";
import LiveChat from "../components/LiveChat";

const Video = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleSidebar(false));
  }, [dispatch]);

  const videoId = searchParams.get("v");
  return (
    <div>
      <div className="mt-3 flex h-[415px] gap-6">
        <iframe
          width="760"
          height="415"
          src={`https://www.youtube.com/embed/${videoId}?si=-pJAh9GvTVJFrBKI&autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <LiveChat />
      </div>
      <CommentContainer />
    </div>
  );
};

export default Video;
