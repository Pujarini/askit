import channels from "../../data/channel.json";
import Channel from "./Channel";
const ChannelComponent = () => {
  return (
    <div className="border border-slate-200 m-2  p-5 text-left mt-5 rounded-lg h-[350px] overflow-y-auto">
      <h1 className="font-bold">Channels</h1>
      {channels.map((channel) => {
        return <Channel name={channel.channel} key={channel.id} />;
      })}
    </div>
  );
};

export default ChannelComponent;
