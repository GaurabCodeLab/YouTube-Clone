import { useEffect, useState, useRef } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [chatsDetails, setChatDetails] = useState([]);
  const [message, setMessage] = useState(null);
  const ele = useRef();
  useEffect(() => {
    const timer = setInterval(() => {
      if (chatsDetails.length > 200) {
        chatsDetails.unshift();
      }
      ele.current.scrollTop =
        ele?.current?.scrollHeight + ele?.current?.clientHeight;
      setChatDetails((pre) => {
        return [
          ...pre,
          { name: generateRandomName(), message: makeRandomMessage(20) },
        ];
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, [chatsDetails]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setChatDetails((pre) => {
      return [...pre, { name: "Gaurab Kumar", message: message }];
    });
    setMessage("");
  };
  return (
    <div>
      <h2 className="font-bold ps-2 pb-1 text-green-500">Live Chat</h2>
      <div
        className="h-full overflow-auto scroll-smooth no-scrollbar"
        ref={ele}
      >
        {chatsDetails.length > 0 &&
          chatsDetails.map((value) => (
            <div className="flex gap-1 px-4 py-1 rounded-md">
              <IoPersonCircleSharp className="text-3xl cursor-pointer relative bottom-[2px]" />
              <div className="font-bold">{value.name}</div>
              <div>{value.message}</div>
            </div>
          ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="border ps-2 py-1 me-3"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="border py-1 px-3 rounded-sm">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
