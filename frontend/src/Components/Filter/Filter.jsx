import { Dropdown, tDropdown } from "..";
import "./Filter.scss";


const Filter = ({ title, options, value }) => {
  return (
    <div className="filter">
      <div className="filter__title">{title}</div>
      <Dropdown className="filter__dropdown" value={value} options={options} />
    </div>
  );
};

export default Filter;
