import { useState } from "react";
import classNames from "classnames";
import "./Dropdown.scss";

type tDropdownItem =
  | {
      key: number;
      item: JSX.Element | string;
    }
  | string;

export type tDropdown = {
  className: string;
  options: Array<{
    key: number;
    item: tDropdownItem;
  }>;
  value?: tDropdownItem;
};

const Dropdown = ({ className, options, value }: tDropdown) => {
  const [is_expanded, setIsExpanded] = useState(false);
  return (
    <div className={classNames("dropdown", className)}>
      <div className="dropdown__selection">
        <div className="dropdown__selection-option dropdown__item">{value}</div>
        <div
          className="dropdown__selection-symbol"
          onClick={() => setIsExpanded(!is_expanded)}
        >
          {options && is_expanded ? "▲" : "▼"}
        </div>
      </div>
      {options && is_expanded && (
        <div className="dropdown__options">
          <div className="dropdown__options-item dropdown__item"></div>
          {options.map((opt) => (
            <div
              key={opt.key}
              className="dropdown__options-item dropdown__item"
            >
              {opt.item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
