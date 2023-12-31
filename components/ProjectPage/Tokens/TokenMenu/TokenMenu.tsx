import { type Project } from "components/staticData/projects";

import * as St from "./TokenMenu.styled";
import TokenSearch from "./TokenSearch";

interface Props {
  project: Project;
  refetch: () => void;
  setSortDir: React.Dispatch<React.SetStateAction<"asc" | "desc">>;
  setSortType: React.Dispatch<React.SetStateAction<"tokenId" | "worldLevel">>;
  setTokenSearchId: React.Dispatch<React.SetStateAction<number | null>>;
  sortDir: "asc" | "desc";
  sortType: "tokenId" | "worldLevel";
  tokenSearchId: number | null;
  usesTransfers: boolean;
}

const TokenMenu = ({
  project,
  refetch,
  setSortDir,
  setSortType,
  setTokenSearchId,
  sortDir,
  sortType,
  tokenSearchId,
  usesTransfers,
}: Props): JSX.Element => {
  const { projectSlug } = project;

  return (
    <St.Container>
      {/* <St.RightDiv> */}
      <TokenSearch
        project={project}
        refetch={refetch}
        setTokenId={setTokenSearchId}
        tokenId={tokenSearchId}
      />

      <St.SortDiv>
        {/* <St.SortText>Sort by:</St.SortText> */}
        <St.TextButton
          className={`${
            sortType === "tokenId" ? "" : "inactive"
          } special-artist-name`}
          onClick={() => {
            if (sortType === "worldLevel") setSortDir("asc");
            setSortType("tokenId");
          }}
        >
          ID
        </St.TextButton>

        {usesTransfers && (
          <>
            <St.SubtleText className="special-artist-name">|</St.SubtleText>
            <St.TextButton
              className={`${
                sortType === "worldLevel" ? "" : "inactive"
              } special-artist-name`}
              onClick={() => {
                if (sortType === "tokenId") setSortDir("desc");
                setSortType("worldLevel");
              }}
            >
              {projectSlug === "chainlife" ||
              projectSlug === "chainlife-testnet"
                ? "World Level"
                : "Transfers"}
            </St.TextButton>
          </>
        )}

        <St.SortButton>
          {sortDir === "asc" ? (
            <St.SortIconAsc
              className="icon"
              onClick={() => setSortDir("desc")}
            />
          ) : (
            <St.SortIconDesc
              className="icon"
              onClick={() => setSortDir("asc")}
            />
          )}
        </St.SortButton>
      </St.SortDiv>
      {/* </St.RightDiv> */}
    </St.Container>
  );
};

export default TokenMenu;
