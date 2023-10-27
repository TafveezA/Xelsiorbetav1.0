import { Button } from "../../../Components";
import "./P2PPopularCurrencies.scss";

const P2PPopularCurrencies = () => {
  return (
    <div className="p2p-popular-currencies">
      <div className="p2p-popular-currencies__title">
        Popular
        <br />
        Currencies
      </div>
      <div className="p2p-popular-currencies__currencies">
        <Button text="XRP" />
        <Button text="BTC" />
        <Button text="USDT" />
        <Button text="LTC" />
        <Button text="AVX" />
      </div>
    </div>
  );
};

export default P2PPopularCurrencies;
