import React from "react";
import { Outlet } from "react-router-dom";
import ChannelComponent from "../../components/Channel";
import DummyComponent from "../../components/dummyComponent";
import FollowComponent from "../../components/follow";
import Header from "../../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex text-slate-50 justify-center">
        <Outlet />
        <div className="flex flex-col mt-5">
          <ChannelComponent />
          <FollowComponent />
        </div>
      </div>
    </>
  );
};

export default Home;
