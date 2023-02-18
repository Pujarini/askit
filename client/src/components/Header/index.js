import React from "react";
import CategoryComponent from "./CategoryComponent";
import Logo from "./Logo";
import SearchComponent from "./SearchComponent";
import UserComponent from "./UserComponent";

const style = {
  container:
    "flex justify-between border border-slate-200 p-5 bg-[#343536] text-[#D7DADC]",
};

const Header = () => {
  return (
    <div className={style.container}>
      <Logo />
      <CategoryComponent />
      <SearchComponent />
      <UserComponent />
    </div>
  );
};

export default Header;
