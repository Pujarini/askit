import { useState } from "react";

const CreateComment = ({ onSubmit, initialValue = "", loading, error }) => {
  const [text, setText] = useState(initialValue);

  const commenthandler = (e) => {
    setText(e.target.value);
  };

  const addComment = (e) => {
    e.preventDefault();
    onSubmit(text).then(() => setText(""));
  };

  return (
    <div className="my-5  w-full">
      <form class="mb-6 w-full" onSubmit={addComment}>
        <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <label for="comment" class="sr-only">
            Your comment
          </label>
          <textarea
            autoFocus
            id="comment"
            rows="6"
            className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
            placeholder="Write a comment..."
            required
            value={text}
            onChange={commenthandler}
          ></textarea>
        </div>
        <button
          type="submit"
          class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 border border-slate-200"
        >
          {loading ? "Loading" : "Post comment"}
        </button>
        <p>{error}</p>
      </form>
    </div>
  );
};

export default CreateComment;
