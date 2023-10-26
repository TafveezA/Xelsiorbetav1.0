import classNames from "classnames";
import "./SegmentedSelector.scss";

type tSegmentedSelector = {
  className: string;
  color: string;
  rounded?: {
    sides: "top" | "bottom" | "all";
    borderRadius?: number | string;
  };
  width: number | string;
  selectors: Array<{
    action: () => void;
    isActive: boolean;
    text: string;
  }>;
};

const SegmentedSelector = ({
  className,
  color,
  rounded,
  width,
  selectors,
}: tSegmentedSelector) => {
  return (
    <div
      className={classNames("segmented-selector", {
        "segmented-selector--top-rounded": rounded?.sides === "top",
        "segmented-selector--bottom-rounded": rounded?.sides === "bottom",
        "segmented-selector--all-rounded": rounded?.sides === "all",
      })}
      style={{
        borderColor: color ?? "black",
      }}
    >
      {selectors.map((selector) => (
        <div
          className="segmented-selector__item"
          onClick={selector.action}
          style={{
            background: selector.isActive ? color : "none",
            color: selector.isActive ? "inherit" : color,
          }}
        >
          {selector.text}
        </div>
      ))}
    </div>
  );
};

export default SegmentedSelector;
