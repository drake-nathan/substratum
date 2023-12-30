import { useWeb3Modal, useWeb3ModalState } from "@web3modal/wagmi/react";
import { useIsClient } from "hooks/useIsClient";
import { useEffect, useState } from "react";
import { shortenAddress, shortenEth, shortenText } from "utils/shorteners";
import { useAccount, useBalance, useEnsName } from "wagmi";

const ConnectButton = (): JSX.Element => {
  const { isClient } = useIsClient();
  const { open, close } = useWeb3Modal();
  const { open: isOpen } = useWeb3ModalState();

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
    <button
      className="flex h-[90px] w-[300px] items-center justify-center  bg-black font-bold text-white hover:underline"
      onClick={clickHandler}
      style={{ borderLeft: "1px solid #fffcf9" }}
    >
      {address && isClient ? (
        <div className="flex flex-col items-center gap-2">
          <p>{accountText}</p>
          <p>{eth && `${eth} ${balance?.symbol}`}</p>
        </div>
      ) : (
        <h3>Connect</h3>
      )}
    </button>
  );
};

export default ConnectButton;
