import { useState } from "react";
import { useEffect } from "react";
import data from "../../../data/posts.json";
import { fetchPosts } from "../../../services/fetchPosts";
import CardComponent from "./CardComponent";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPostList();
  }, []);

  const fetchPostList = async () => {
    const data = await fetchPosts();
    setPosts(data);
  };

  console.log(posts);
  return (
    <div className="mb-5">
      {data.map((cards) => {
        return <CardComponent {...cards} />;
      })}
    </div>
  );
};

export default PostList;
