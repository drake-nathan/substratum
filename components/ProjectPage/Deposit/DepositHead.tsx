import React from "react";

import { RightArrowIcon } from "components/Header/NavLinks/NavLinks.styled";

const DepositHead = () => {
  return (
    <div className="-mt-3 flex min-w-80 max-w-xl flex-col">
      {/* Head Container */}
      <>
        <h1>Deposit Initiative</h1>
        <h5 className="font-semibold">
          A custom and reusable fund-raise / deposit-withdraw contract written
          by Matto.
        </h5>
        <p className="pb-6 pt-4 font-light">
          Deposits can be made and withdrawn until the goal number of depositors
          is reached or the artist closes the round. The contract includes
          safety measures, a mechanism to apply a discount for token holders
          from a specified collection, and it can be reset and reused after each
          funding completion.
        </p>
        <div className="flex flex-row justify-end">
          <a className="underline" href="">
            View Allow List
          </a>
          <RightArrowIcon />
        </div>
      </>
    </div>
  );
};

export default DepositHead;
