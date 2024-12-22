const Sidebar = () => {
  return (
    <div className="pr-10 border-r">
      <div className="py-8">
        <h3 className="font-semibold cursor-pointer">Home</h3>
        <ul className="cursor-pointer">
          <li>Shorts</li>
          <li>Videos</li>
          <li>Live</li>
        </ul>
      </div>
      <div className="pb-8">
        <h3 className="font-semibold cursor-pointer">Subscriptions</h3>
        <ul className="cursor-pointer">
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold cursor-pointer">Watch Later</h3>
        <ul className="cursor-pointer">
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
