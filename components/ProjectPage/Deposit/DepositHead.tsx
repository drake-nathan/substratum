import { useState } from "react";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

import { Description, Headers, SubHeaders } from "./constants";
import { useAllowlist } from "hooks/deposit/useDepositAllowlist";

const DepositHead = () => {
  const [headerText, setHeaderText] = useState(Headers[0]);

  const [subHeaderText, setSubHeaderText] = useState(SubHeaders[0]);

  const allowlist = useAllowlist();

  const allowListJsx = allowlist?.map((address, index) => (
    <li className="max-md:text-sm" key={index}>
      {address}
    </li>
  ));

  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (headerText === Headers[0]) {
      setHeaderText(Headers[1]);
      setSubHeaderText(SubHeaders[1]);
    } else {
      setHeaderText(Headers[0]);
      setSubHeaderText(SubHeaders[0]);
    }
  };

  if (headerText === Headers[0]) {
    return (
      <div
        className="-mt-3 flex min-w-80 max-w-xl flex-col max-md:mt-8"
        id="deposit-head-container"
      >
        <h1 className="max-md:text-2xl">{headerText}</h1>
        <h5 className="font-semibold max-md:text-base">{subHeaderText}</h5>
        <p className="pb-6 pt-4 font-light max-md:text-base">{Description}</p>

        <div className="flex items-center justify-end max-md:justify-start max-sm:mb-10">
          <a className="underline " href="" onClick={handleLinkClick}>
            View Allow List
          </a>
          <RxCaretRight
            className="cursor-pointer text-3xl"
            onClick={handleLinkClick}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className="-mt-3 flex min-w-80 max-w-xl flex-col max-md:mt-8"
      id="deposit-head-container"
    >
      <h1 className="max-md:text-2xl">{headerText}</h1>
      <h5 className="font-semibold max-md:text-base">{subHeaderText}</h5>

      <ul
        className="mb-6 mt-2 max-h-72 overflow-x-hidden overflow-y-scroll pb-8 pt-4 font-light leading-8"
        id="allowlist-container"
      >
        {allowListJsx?.length ? allowListJsx : "No addresses found..."}
      </ul>

      <div className="flex items-center max-md:justify-start max-sm:mb-10">
        <RxCaretLeft
          className="mt-px cursor-pointer align-middle text-3xl"
          onClick={handleLinkClick}
        />
        <a
          className="underline max-sm:text-sm"
          href=""
          onClick={handleLinkClick}
        >
          Back
        </a>
      </div>
    </div>
  );
};

export default DepositHead;
