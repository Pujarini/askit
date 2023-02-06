export const totalComments = (comments) => {
  let total = comments.length;
  comments.map((comment) => {
    if (comment.replies.length > 0) {
      total = total + comment.replies.length;
    }
  });
  return total;
};
