import React from "react";
import Select, { components } from "react-select";

interface SelectOptionProps {
  value: any;
  options: any[];
  onChange: (value: any) => void;
  icon: string;
}
const customStyles = {
  control: (provided: any) => ({
    ...provided,
    backgroundColor: "#f1f1f1", // Set the background color of the control (non-dropdown) area
    border: "1px solid #ccc", // Set the border color
    borderRadius: "8px", // Set the border radius
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#e0e0e0" : "#ffffff", // Set the background color of each option
    color: "#333", // Set the text color
    display: "flex",
  }),
  menu: (provided: any) => ({
    ...provided,
    backgroundColor: "#ffffff", // Set the background color of the dropdown menu
  }),
  singleValue: (provided: any) => ({
    ...provided,
    display: "flex",
  }),
};
const Option: React.FC<any> = ({ data, ...props }) => (
  <components.Option {...props} className="country-option flex">
    <p className="flex">
      <img src={data.icon} alt="logo" className="country-logo" />
      <span>{data.label}</span>
    </p>
  </components.Option>
);

const SingleValue: React.FC<any> = ({ children, ...props }) => (
  <components.SingleValue {...props}>
    <img src={props.data.icon} alt="s-logo" className="selected-logo" />
    {children}
  </components.SingleValue>
);

const SelectOption: React.FC<SelectOptionProps> = ({
  value,
  options,
  onChange,
  icon,
}) => {
  return (
    <Select
      value={value}
      options={options}
      onChange={onChange}
      styles={customStyles}
      components={{
        Option,
        SingleValue,
      }}
    />
  );
};

export default SelectOption;
