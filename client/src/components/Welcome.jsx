import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";
import { MaskMeta } from ".";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-xm p-2 outline-none rounded-full text-[#444444] border-[1px] border-white  text-sm  placeholder:text-white bg-transparent"
  />
);

const Welcome = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <div className="flex w-full justify-center items-center">
      <MaskMeta />
      <div className="mt-80 flex-wrap flex mf:flex-row flex-col justify-center items-center justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 items-center flex-col mf:mr-10">
          <h1 className="text-4xl sm:text-7xl text-gradient py-1 tracking-wide font-bold">
          mAilmetA <br />
          </h1>
          <p className="sm:text-2xl text-center mt-5 text-[#6c3a1a] font-semibold md:w-9/12 w-11/12 text-base">
            Check and send messages attached to your Ethereum transacctions.
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="z-10 flex flex-row justify-center items-center my-5 p-3 rounded-full drop-shadow text-[#444444] font-bold mt-2 border-[1px] p-2 border-white hover:bg-[#e7d5ec] hover:drop-shadow-lg"
            >
              <p className="text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}
        </div>
        <div className="flex flex-col flex-1 items-center justify-start w-11/12 mf:mt-0 mt-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
            <div className="flex justify-between items-start items-center ">
                <div className="w-20 h-20 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={90} color="#444444" />
                </div>
                <p className="text-white text-right font-semibold text-2xl sm:text-4xl mt-1 z-10">
                  Use Ropsten TestNet
                </p>
              </div>
              <div className="m-auto">
                <p className="text-white font-light text-4xl">
                  {shortenAddress(currentAccount)}
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center white-glassmorphism">
              <Input placeholder="Send to" name="addressTo" type="text" handleChange={handleChange} />
              <Input placeholder="Amount of ETH" name="amount" type="number" handleChange={handleChange} />
              <Input placeholder="Subject (GIF Keyword)" name="keyword" type="text" handleChange={handleChange} />
              <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />
          <div className="h-[1px] w-full bg-[#999999] my-2" />
            {isLoading
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="drop-shadow font-bold w-full mt-2 border-[1px] p-2 border-white hover:bg-[#e7d5ec] text-[#444444] hover:drop-shadow-lg rounded-full"
                >
                  Send now
                </button>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome