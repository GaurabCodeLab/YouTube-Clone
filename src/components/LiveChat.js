import { IoPersonCircleSharp } from "react-icons/io5";

const LiveChat = () => {
  return (
    <div>
      <div className="flex gap-1 h-full border p-4 rounded-md">
        <IoPersonCircleSharp className="text-3xl cursor-pointer relative bottom-[2px]" />
        <div className="font-bold">Gaurab Kumar</div>
        <div>My first live chat message</div>
      </div>
      <div className="mt-3">
        <input className="border ps-2 py-1 me-3" />
        <button className="border py-1 px-3 rounded-sm">Send</button>
      </div>
    </div>
  );
};

export default LiveChat;
