import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SelectComponent = ({ categories }) => {
  const [options, setOptions] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setOptions(categories[0]);
    // eslint-disable-next-line
  }, []);

  const selectOption = (e) => {
    const value = e.target.value;
    setOptions(value);
    navigate(`/${value}`);
  };

  return (
    <select
      value={options}
      onChange={selectOption}
      className="rounded-lg text-slate-700 outline-none p-2 m-2"
    >
      {categories.map((option) => {
        return <option value={option.name}>{option.name}</option>;
      })}
    </select>
  );
};

export default SelectComponent;
