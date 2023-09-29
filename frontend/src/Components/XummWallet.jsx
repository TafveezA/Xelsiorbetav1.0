import React, { useState } from 'react';
import { XummSdk } from 'xumm-sdk';

const XummWallet = () => {
  const [xummOpen, setXummOpen] = useState(false);

  const openXumm = async () => {
    const xumm = new XummSdk();

    const xummPayload = {
      txjson: {
        TransactionType: 'Payment',
        Destination: 'rXUMMaPpZqPutoRszR29jtC8amWq3APkx',
        Amount: '10000', // XRP amount in drops
        Fee: '12', // Transaction fee in drops
        Memos: [
          {
            Memo: {
              MemoType: 'string',
              MemoData: 'Your memo data',
            },
          },
        ],
      },
    };

    xumm.createXrplTransaction(xummPayload);
    setXummOpen(true);
  };

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={openXumm}
      >
        Open XUMM Wallet
      </button>
      {xummOpen && <p>XUMM wallet is open...</p>}
    </div>
  );
};

export default XummWallet;
