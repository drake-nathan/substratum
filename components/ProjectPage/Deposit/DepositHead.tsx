import { useState } from "react";

import {
  Address,
  AllowListAddressContainer,
  AllowListLink,
  BackLink,
  DepositHeadContainer,
  DepositHeader,
  DepositSubHeader,
  DepositText,
  LeftArrowIcon,
  LinkRow,
  RightArrowIcon,
} from "./DepositHead.styled";
import { Description, Headers, SubHeaders } from "./constants";
import { useAllowlist } from "hooks/deposit/useDepositAllowlist";

const DepositHead = () => {
  const [headerText, setHeaderText] = useState(Headers[0]);

  const [subHeaderText, setSubHeaderText] = useState(SubHeaders[0]);

  const allowlist = useAllowlist();

  const allowListJsx = allowlist?.map((address, index) => (
    <Address key={index}>{address}</Address>
  ));

  const handleLinkClick = (e: { preventDefault: () => void }) => {
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
      <DepositHeadContainer className="-mt-3 flex min-w-80 max-w-xl flex-col">
        <DepositHeader>{headerText}</DepositHeader>
        <DepositSubHeader className="font-semibold">
          {subHeaderText}
        </DepositSubHeader>
        <DepositText className="pb-6 pt-4 font-light">
          {Description}
        </DepositText>
        <LinkRow className="flex flex-row justify-end max-sm:mb-10">
          <AllowListLink
            className="underline"
            href=""
            onClick={handleLinkClick}
          >
            View Allow List
          </AllowListLink>
          <RightArrowIcon
            className="cursor-pointer"
            onClick={handleLinkClick}
          />
        </LinkRow>
      </DepositHeadContainer>
    );
  }

  return (
    <DepositHeadContainer className="-mt-3 flex min-w-80 max-w-xl flex-col">
      <DepositHeader>{headerText}</DepositHeader>
      <DepositSubHeader className="font-semibold">
        {subHeaderText}
      </DepositSubHeader>
      <AllowListAddressContainer className="py-8 pt-4 font-light">
        {allowListJsx?.length ? allowListJsx : "No addresses found..."}
      </AllowListAddressContainer>
      <LinkRow className="flex flex-row max-sm:mb-10">
        <LeftArrowIcon className="cursor-pointer" onClick={handleLinkClick} />
        <BackLink className="underline" href="" onClick={handleLinkClick}>
          Back
        </BackLink>
      </LinkRow>
    </DepositHeadContainer>
  );
};

export default DepositHead;
