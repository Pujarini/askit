import SelectComponent from "../commons/SelectComponent/SelectComponent";

const options = [
  { id: 0, name: "Choose Category" },
  { id: 1, name: "Home" },
  { id: 2, name: "React" },
  { id: 3, name: "Next" },
  { id: 4, name: "Help wanted" },
];

const CategoryComponent = () => {
  return <SelectComponent categories={options} />;
};

export default CategoryComponent;
