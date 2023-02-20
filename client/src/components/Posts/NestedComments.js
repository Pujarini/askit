import { useMemo } from "react";
import Comment from "./Comment";

const NestedComments = ({ comments }) => {
  const getCommentsByParentId = useMemo(() => {
    const group = {};
    comments?.forEach((comment) => {
      const id = comment.parentId ? comment.parentId : "root";
      group[id] ||= [];
      group[id].push(comment);
    });
    return group;
  }, [comments]);

  const getChildComments = (parentId) => {
    return getCommentsByParentId[parentId];
  };

  const renderCommentList = (reply) => {
    return (
      <>
        {reply &&
          reply?.map((comment) => {
            return (
              <>
                <Comment comment={comment} />
                {getChildComments(comment?.id)?.length > 0 && (
                  <div className="my-2 ml-10">
                    {renderCommentList(getChildComments(comment?.id))}
                  </div>
                )}
              </>
            );
          })}
      </>
    );
  };

  return (
    <div className="flex flex-col mt-5 w-full gap-2">
      {comments && renderCommentList(getCommentsByParentId["root"])}
    </div>
  );
};

export default NestedComments;
