import { makeRequest } from "./makeRequests";

export const createCommentService = ({ postId, message, parentId = null }) => {
  console.log(postId, "postId");
  return (
    makeRequest(`/posts/${postId}/comments`),
    {
      method: "POST",
      data: { message, parentId },
    }
  );
};
