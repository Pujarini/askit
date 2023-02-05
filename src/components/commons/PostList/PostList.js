import data from "../../../data/posts.json";
import CardComponent from "./CardComponent";

const PostList = () => {
  return (
    <div className="">
      {data.map((cards) => {
        return <CardComponent {...cards} />;
      })}
    </div>
  );
};

export default PostList;
