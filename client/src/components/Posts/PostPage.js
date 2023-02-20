import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NestedComments from "./NestedComments";
import { fetchPostsById } from "../../services/fetchPosts";
import { useFetchUser } from "../../hooks/useFetchUsers";

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const user = useFetchUser(post.userId);

  useEffect(() => {
    fetchPostInfo();
  }, [id]);

  const fetchPostInfo = async () => {
    const response = await fetchPostsById(id);
    setPost(response);
  };

  return (
    <div className="flex flex-col mt-5 mr-5 rounded-md p-5 bg-[#1A1A1B] items-start w-[700px]">
      <div className="flex items-center">
        <img
          className="w-5 h-5 rounded-full mr-4"
          src="https://mirimstudent25.files.wordpress.com/2013/10/movietalk-despicableme630-jpg_002144.jpg"
          alt="Avatar of Jonathan Reinink"
        />
        <div className="text-sm ">
          <span className="text-slate-500 leading-none mr-2 text-sm">
            {" "}
            Posted by {user}
          </span>
          <span className="text-slate-500 text-sm">Aug 18</span>
        </div>
      </div>
      <div className="m-2 text-xl mt-5">{post?.title}</div>
      <p className="text-sm mt-5">{post?.description}</p>
      <div className="flex items-center gap-5 mt-5 ">
        <p className="text-sm text-slate-500 flex items-center hover:underline cursor-pointer">
          {post?.comments && post?.comments.length} comments
        </p>
        <p className="text-sm text-slate-500 flex items-center cursor-pointer">
          Save
        </p>
      </div>
      <NestedComments comments={post?.comments} />
    </div>
  );
};

export default PostPage;
