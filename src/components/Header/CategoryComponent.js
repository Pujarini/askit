import SelectComponent from "../commons/SelectComponent/SelectComponent";

const options = [
  { id: 0, name: "Home" },
  { id: 1, name: "React" },
  { id: 2, name: "Next" },
  { id: 3, name: "Help wanted" },
];

const CategoryComponent = () => {
  return <SelectComponent title="Choose Category" options={options} />;
};

export default CategoryComponent;
