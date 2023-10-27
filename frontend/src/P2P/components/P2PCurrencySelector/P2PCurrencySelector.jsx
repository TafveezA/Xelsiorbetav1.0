// import { Dropdown, SegmentedSelector } from "../../../components";
import "./P2PCurrencySelector.scss";

const P2PCurrencySelector = () => {
  return (
    <div className="p2p-currency-selector">
      {/* <SegmentedSelector
        width="100%"
        color="#00A478"
        rounded={{ sides: "top", borderRadius: "10px" }}
        selectors={[
          { action: () => {}, isActive: true, text: "Buy" },
          { action: () => {}, isActive: false, text: "sell" },
        ]}
      /> */}
      <div className="p2p-currency-selector__setter">
        <div className="p2p-currency-selector__amount">
          <div className="p2p-currency-selector__amount-title">Amount</div>
          <input
            type="input"
            className="p2p-currency-selector__amount-input"
            value={0}
          />
        </div>
        <div className="p2p-currency-selector__dropdown">
          {/* <Dropdown /> */}
        </div>
      </div>
    </div>
  );
};

export default P2PCurrencySelector;
