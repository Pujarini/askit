import { useState } from "react";
import { useEffect } from "react";
// import data from "../../../data/posts.json";
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

  return (
    <div className="mb-5">
      {posts.map((cards) => {
        return <CardComponent {...cards} key={cards.id} />;
      })}
    </div>
  );
};

export default PostList;
