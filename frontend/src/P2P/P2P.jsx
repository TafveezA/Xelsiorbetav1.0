import React from "react";
import Filter from "../Components/Filter/Filter";
// import { P2PCurrencySelector, P2PPopularCurrencies } from "./components";
import P2PCurrencySelector from './components/P2PCurrencySelector/P2PCurrencySelector'
import P2PPopularCurrencies from './components/P2PPopularCurrencies/P2PPopularCurrencies'
import "./P2P.scss";

const P2P = () => {
  return (
    <div className="p2p">
      <div className="p2p__header">
        <P2PCurrencySelector />
        <Filter title="Payment" />
        <Filter title="Sort" />
        <P2PPopularCurrencies />
      </div>
    </div>
  );
};

export default P2P;
