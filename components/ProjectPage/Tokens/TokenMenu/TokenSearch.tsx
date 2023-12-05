import { type Project } from "components/staticData/projects";
import { useCurrentSupply } from "hooks/useCurrentSupply";
import { useEffect, useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";

import * as St from "./TokenSearch.styled";

type IToken = { tokenId: number };

interface Props {
  project: Project;
  tokenId: number | null;
  setTokenId: React.Dispatch<React.SetStateAction<number | null>>;
  refetch: () => void;
}

const TokenSearch = ({
  project,
  tokenId,
  setTokenId,
  refetch,
}: Props): JSX.Element => {
  const { maxSupply, isZeroIndexed, projectSlug } = project;

  const currentSupply = useCurrentSupply(projectSlug);

  const indexCorrection = isZeroIndexed ? 1 : 0;
  const maxToken = currentSupply
    ? currentSupply - indexCorrection
    : maxSupply - indexCorrection;

  const [errorText, setErrorText] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IToken>();

  const onSubmit: SubmitHandler<IToken> = () => {
    refetch();
  };

  useEffect(() => {
    if (errors.tokenId && errors.tokenId.message) {
      setErrorText(errors.tokenId.message);
      setTimeout(() => setErrorText(""), 3000);
    } else if (errorText) {
      setTimeout(() => setErrorText(""), 3000);
    }
  }, [errors.tokenId, errorText]);

  useEffect(() => {
    if (currentSupply && tokenId && tokenId > maxToken) {
      setErrorText(`Max Token ID is ${maxToken}`);
      setTokenId(currentSupply - indexCorrection);
    } else if (!isZeroIndexed && tokenId !== null && tokenId < 1) {
      setErrorText("Min Token ID is 1");
      setTokenId(1);
    } else if (tokenId && tokenId < 0) {
      setErrorText("Min Token ID is 0");
      setTokenId(0);
    } else if (Number.isNaN(tokenId)) setTokenId(null);
  }, [
    tokenId,
    currentSupply,
    maxToken,
    isZeroIndexed,
    indexCorrection,
    setTokenId,
  ]);

  useEffect(() => {
    setTokenId(null);
  }, [project, setTokenId]);

  return (
    <>
      <St.Form id="token-page-form" onSubmit={handleSubmit(onSubmit)}>
        <St.Input
          className="special-artist-name"
          type="number"
          {...register("tokenId", {
            max: {
              message: "Must be less than current supply.",
              value: currentSupply ? currentSupply - 1 : maxSupply,
            },
            valueAsNumber: true,
          })}
          id="enter-id"
          value={tokenId || tokenId === 0 ? tokenId : ""}
          autoComplete="off"
          onChange={(e) => setTokenId(parseInt(e.target.value, 10))}
          placeholder="Search By Token ID"
          onBlur={() => {
            if (tokenId === null || (tokenId === undefined && tokenId !== 0)) {
              setTokenId(null);
              refetch();
            }
          }}
        />
      </St.Form>
      {errorText && (
        <St.ErrorText className="special-artist-name">{errorText}</St.ErrorText>
      )}
    </>
  );
};

export default TokenSearch;
