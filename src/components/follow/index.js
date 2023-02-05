import data from "../../data/users.json";
import FollowUser from "./FollowUser";

const FollowComponent = () => {
  return (
    <div className="border border-slate-200 mr-2 p-5  h-[250px] rounded-lg text-left mt-5 basis-1/2 overflow-y-auto">
      <h1 className="font-bold">Follow</h1>
      {data.map((user) => {
        return <FollowUser name={user.users} key={user.id} />;
      })}
    </div>
  );
};

export default FollowComponent;
