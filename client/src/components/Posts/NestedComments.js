import Comment from "./Comment";

const NestedComments = ({ comments }) => {
  console.log(comments);
  const renderCommentList = (reply) => {
    console.log(reply);
    return (
      <>
        {reply &&
          reply.map((comment) => {
            console.log(comment);
            return (
              <>
                <Comment comment={comment} />
                {/* <div className="ml-10 mt-5">
                  {comment.parentId && renderCommentList(comment.parentId)}
                </div> */}
              </>
            );
          })}
      </>
    );
  };

  return (
    <div className="flex flex-col mt-5 w-full gap-2">
      {comments && renderCommentList(comments)}
    </div>
  );
};

export default NestedComments;
