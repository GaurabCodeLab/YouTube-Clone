import { useSearchParams } from "react-router-dom";

const Video = () => {
  const [searchParams] = useSearchParams();

  const videoId = searchParams.get("v");
  return (
    <div className="mt-3">
      <iframe
        width="760"
        height="415"
        src={`https://www.youtube.com/embed/${videoId}?si=-pJAh9GvTVJFrBKI&autoplay=1`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
