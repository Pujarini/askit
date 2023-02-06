import data from "../../../data/posts.json";
import CardComponent from "./CardComponent";

const PostList = () => {
  return (
    <div className="mb-5">
      {data.map((cards) => {
        console.log(cards.comments);
        return <CardComponent {...cards} />;
      })}
    </div>
  );
};

export default PostList;
