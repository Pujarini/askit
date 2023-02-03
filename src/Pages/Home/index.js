import React from "react";
import { Outlet } from "react-router-dom";
import ChannelComponent from "../../components/Channel";
import FollowComponent from "../../components/follow";
import Header from "../../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex text-slate-50">
        <ChannelComponent />
        <Outlet />
        <FollowComponent />
      </div>
    </>
  );
};

export default Home;
