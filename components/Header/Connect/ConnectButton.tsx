import * as St from "./ConnectButton.styled";
import { useAccount, useBalance, useEnsName } from "wagmi";
import { useWeb3Modal } from "@web3modal/react";
import { shortenAddress, shortenEth, shortenText } from "utils/shorteners";
import { useIsClient } from "hooks/useIsClient";
import { useEffect, useState } from "react";

const ConnectButton = (): JSX.Element => {
  const { isOpen, open, close } = useWeb3Modal();
  const { isClient } = useIsClient();

  const { address } = useAccount();
  const { data: ens } = useEnsName({ address });
  const { data: balance } = useBalance({ address });

  const [accountText, setAccountText] = useState<string>();

  useEffect(() => {
    if (ens) setAccountText(shortenText(ens));
    else if (address) setAccountText(shortenAddress(address));
  }, [address, ens]);

  const clickHandler = () => {
    if (isOpen) {
      close();
    } else {
      open();
    }
  };

  const eth = balance?.formatted ? shortenEth(balance.formatted) : null;

  return (
    <St.ConnectButton onClick={clickHandler}>
      {address && isClient ? (
        <St.WalletInfo>
          <p>{accountText}</p>
          <p>{eth && `${eth} ${balance?.symbol}`}</p>
        </St.WalletInfo>
      ) : (
        <h3>Connect</h3>
      )}
    </St.ConnectButton>
  );
};

export default ConnectButton;
