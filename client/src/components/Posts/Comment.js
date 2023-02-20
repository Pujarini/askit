import CommentInfo from "./CommentInfo";

const Comment = ({ comment }) => {
  console.log(comment);
  return (
    <div className="border border-slate-100 rounded-sm w-full p-5 ">
      <div className="flex items-center">
        <img
          className="w-5 h-5 rounded-full mr-4"
          src="https://mirimstudent25.files.wordpress.com/2013/10/movietalk-despicableme630-jpg_002144.jpg"
          alt="Avatar of Jonathan Reinink"
        />
        <div className="text-sm ">
          <span className="text-slate-500 leading-none mr-2 text-sm">
            {" "}
            Posted by {comment?.user?.name}
          </span>
          <span className="text-slate-500 text-sm">Aug 18</span>
        </div>
      </div>
      <p className="mx-5 px-2 mt-5">{comment?.reply}</p>
      <CommentInfo />
    </div>
  );
};

export default Comment;
