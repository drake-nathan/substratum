import { type Project } from "data/projects";
import { useCurrentSupply } from "hooks/useCurrentSupply";
import { useEffect, useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";

import * as St from "./TokenSearch.styled";

type IToken = { tokenId: number };

interface Props {
  project: Project;
  refetch: () => void;
  setTokenId: React.Dispatch<React.SetStateAction<number | null>>;
  tokenId: number | null;
}

const TokenSearch = ({
  project,
  refetch,
  setTokenId,
  tokenId,
}: Props): JSX.Element => {
  const { isZeroIndexed, maxSupply, projectSlug } = project;

  const currentSupply = useCurrentSupply(projectSlug);

  const indexCorrection = isZeroIndexed ? 1 : 0;
  const maxToken = currentSupply
    ? currentSupply - indexCorrection
    : maxSupply - indexCorrection;

  const [errorText, setErrorText] = useState("");

  const {
    formState: { errors },
    handleSubmit,
    register,
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
          autoComplete="off"
          id="enter-id"
          onBlur={() => {
            if (tokenId === null || (tokenId === undefined && tokenId !== 0)) {
              setTokenId(null);
              refetch();
            }
          }}
          onChange={(e) => setTokenId(parseInt(e.target.value, 10))}
          placeholder="Search By Token ID"
          value={tokenId || tokenId === 0 ? tokenId : ""}
        />
      </St.Form>
      {errorText && (
        <St.ErrorText className="special-artist-name">{errorText}</St.ErrorText>
      )}
    </>
  );
};

export default TokenSearch;
