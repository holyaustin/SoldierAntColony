/* eslint-disable max-len */
import React from "react";
// import { useNavigate } from "react-router-dom";
import logo1 from "../assets/nk-homepage-1.png";

const Nifty = () => {
  // const navigate = useNavigate();

  const getNFT = async () => {
    try {
      //  navigate("/battleground");
    } catch (error) {
      console.error(error);
    }
  };
  const getRedeem = async () => {
    try {
      // <a href="https://app.uniswap.org/#/swap" target="_blank" rel="noreferrer"></a>
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="flex w-full mf:flex-row flex-col justify-center items-center"
      style={{ height: "100vh",

      }}
    >
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-1 font-bold">
          <h1 className="text-4xl sm:text-5xl text-green-500 font-semibold">
            Built with Nifty Kit <br />
          </h1><br />
          <p className="text-left mt-1 text-white md:w-10/12 w-11/12 text-2xl text-black">
            We are currently running giveways<br />
            Be part of this give away now. <br />
            The first 500 collaborators or   <br />
            players can claim their Redeemable NFT. <br />

            <button
              type="button"
              onClick={getRedeem}
              className="flex flex-row justify-center items-center my-5 bg-green-300 p-3 rounded-full cursor-pointer hover:bg-green-800 hover:text-white"
            >

              <p className="text-black text-2xl font-semibold py-3 px-1 mx-14 hover:text-white">
                <a href="https://app.niftykit.com/collections/soldier-ant-colony-1/redeemables/0/0x0b98b882e5ab60ef918aa5a1f5aa9181f131370e464f4e0ada4a10deaf35f4c3318a79a6d68979ab2df16d31463afbe7d2558b79821f4a6ec9006af0877e2e001c" target="_blank" rel="noreferrer">
                  Claim your free NFT
                </a>
              </p>
            </button>
            <br />
            Our Major Game Character or NFT <br />
            Collection now live on Optimism  <br />
            mainnet, thanks to Nifty Kits <br />
            and Quixotic. Get it now

          </p><br />

          <button
            type="button"
            onClick={getNFT}
            className="flex flex-row justify-center items-center my-5 bg-green-300 p-3 rounded-full cursor-pointer hover:bg-green-800 hover:text-white"
          >

            <p className="text-black text-2xl font-semibold py-3 px-10 mx-14 hover:text-white">
              <a href="https://app.niftykit.com/collections/soldier-ant-colony-1" target="_blank" rel="noreferrer">
                Explore NFT Collection
              </a>
            </p>
          </button>

        </div>
      </div>
      <div className="sm:flex-[0.7] lg:flex-[0.9]flex-initial justify-left items-center content-center">

        <img src={logo1} alt="welcome" className="w-400 cursor-pointer" />
      </div>
    </div>
  );
};

export default Nifty;
