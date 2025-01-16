import { IoPersonCircleSharp } from "react-icons/io5";

const commentsData = [
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Akshay Saini",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Akshay Saini",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Akshay Saini",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Akshay Saini",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Akshay Saini",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const Comment = ({ comment }) => {
  const { name, text } = comment;
  return (
    <div className="mb-3">
      <div className="flex gap-2 bg-gray-300 p-2">
        <div className="text-4xl self-center">
          <IoPersonCircleSharp />
        </div>
        <div className="flex self-center justify-center flex-col">
          <div className="font-bold">{name}</div>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment) => (
    <>
      <Comment comment={comment} />
      <div className="ml-4 border-l-2">
        <CommentList comments={comment.replies} />
      </div>
    </>
  ));
};

const CommentContainer = () => {
  return (
    <div className="mt-3 w-[66%]">
      <div className="font-bold text-xl mb-3">Comments:</div>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
