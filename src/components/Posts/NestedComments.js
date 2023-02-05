import Comment from "./Comment";

const NestedComments = ({ comments }) => {
  const renderCommentList = (reply) => {
    return (
      <>
        {reply.map((comment) => {
          return (
            <>
              <Comment comment={comment} />
              <div className="ml-10 mt-5">
                {comment.replies && renderCommentList(comment.replies)}
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div className="flex flex-col mt-5 w-full gap-2">
      {renderCommentList(comments)}
    </div>
  );
};

export default NestedComments;
