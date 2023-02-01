import React from "react";

const SelectOption = ({ value }) => {
  return (
    <a
      href="#"
      class="text-gray-700 block px-4 py-2 text-sm"
      role="menuitem"
      tabindex="-1"
      id="menu-item-0"
    >
      {value}
    </a>
  );
};

export default SelectOption;
