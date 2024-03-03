import { CgSortAz, CgSortZa } from "react-icons/cg";

import type { Project } from "data/projects";

import TokenSearch from "./TokenSearch";

interface Props {
  project: Project;
  refetch: () => void;
  setSortDir: React.Dispatch<React.SetStateAction<"asc" | "desc">>;
  setSortType: React.Dispatch<React.SetStateAction<"tokenId" | "worldLevel">>;
  setTokenSearchId: React.Dispatch<React.SetStateAction<null | number>>;
  sortDir: "asc" | "desc";
  sortType: "tokenId" | "worldLevel";
  tokenSearchId: null | number;
  usesTransfers: boolean;
}

const TokenMenu = ({
  project,
  refetch,
  setSortDir,
  setTokenSearchId,
  sortDir,
  tokenSearchId,
}: Props): JSX.Element => {
  return (
    <div className="my-12 flex w-full flex-nowrap items-center justify-between gap-4 bg-offset p-4 max-md:my-4 max-md:py-2">
      <TokenSearch
        project={project}
        refetch={refetch}
        setTokenId={setTokenSearchId}
        tokenId={tokenSearchId}
      />

      <div className="flex items-center gap-3" id="token-menu-sort-div">
        {/* <button
          className="font-sans font-semibold text-hover-light hover:text-hover-dark"
          onClick={() => {
            if (sortType === "worldLevel") setSortDir("asc");
            setSortType("tokenId");
          }}
        >
          ID
        </button>

        {usesTransfers && (
          <>
            <button
              className="font-sans font-semibold text-hover-light hover:text-hover-dark"
              onClick={() => {
                if (sortType === "tokenId") setSortDir("desc");
                setSortType("worldLevel");
              }}
            >
              {(
                projectSlug === "chainlife" ||
                projectSlug === "chainlife-testnet"
              ) ?
                "World Level"
              : "Transfers"}
            </button>
          </>
        )} */}

        <button className="rounded-full p-1 text-2xl font-light text-hover-light hover:shadow-even">
          {sortDir === "asc" ?
            <CgSortZa onClick={() => setSortDir("desc")} />
          : <CgSortAz onClick={() => setSortDir("asc")} />}
        </button>
      </div>
    </div>
  );
};

export default TokenMenu;
