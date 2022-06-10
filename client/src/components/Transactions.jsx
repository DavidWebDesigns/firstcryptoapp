import React, { useContext } from "react";

import { TransactionContext } from "../context/TransactionContext";

import useFetch from "../hooks/useFetch";
import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";

const TransactionsCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
  const gifUrl = useFetch({ keyword });

  return (
    <div className="blue-glassmorphism m-4 flex flex-1
      2xl:min-w-[450px]
      2xl:min-h-[700px]

      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      min-w-full
      flex-col p-3 rounded-md hover:shadow-2xl"
    >
      <div className="flex flex-col m-auto items-center w-11/12 mt-3">
        <div className="display-flex justify-start w-full mb-6 p-2">
          <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
            <p className="text-white text-base"><b>From: </b>{shortenAddress(addressFrom)}</p>
          </a>
          <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
            <p className="text-white text-base"><b>To: </b>{shortenAddress(addressTo)}</p>
          </a>
          <p className="text-white text-base"><b>Amount: </b>{amount} <b>ETH</b></p>
          <p className="text-white text-base"><b>Subject: </b>{keyword}</p>
          {message && (
            <>
              <p className="text-[#444444] font-bold text-base"><b className="text-white">Message:</b><br/>{message}</p>
            </>
          )}
        </div>
        <img
          src={gifUrl || url}
          alt="nature"
          className="w-11/12 h-56 2xl:h-56 rounded-md shadow-md object-cover border-[1px] border-white"
        />
        <div className="white-glassmorphism p-2 pt-3 w-6/12 rounded-3xl mt-2 text-center">
          <p className="text-xs text-[#fff]">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

const Transactions = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);

  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <h3 className="text-[#444444] font-bold text-3xl text-center my-2">
            Latest Transactions
          </h3>
        ) : (
          <h3 className="text-[#444444] font-bold text-3xl text-center my-2">
            Connect your account to see the latest transactions
          </h3>
        )}

        <div className="flex flex-wrap justify-center items-center mt-10">
          {[...dummyData, ...transactions].reverse().map((transaction, i) => (
            <TransactionsCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;