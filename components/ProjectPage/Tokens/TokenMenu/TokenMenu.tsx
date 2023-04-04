import * as St from './TokenMenu.styled';
import TokenSearch from './TokenSearch';
import { type Project } from 'components/_staticData/projects';

interface Props {
  project: Project;
  usesTransfers: boolean;
  sortDir: 'asc' | 'desc';
  setSortDir: React.Dispatch<React.SetStateAction<'asc' | 'desc'>>;
  sortType: 'tokenId' | 'worldLevel';
  setSortType: React.Dispatch<React.SetStateAction<'tokenId' | 'worldLevel'>>;
  tokenSearchId: number | null;
  setTokenSearchId: React.Dispatch<React.SetStateAction<number | null>>;
  refetch: () => void;
}

const TokenMenu = ({
  project,
  usesTransfers,
  sortDir,
  setSortDir,
  sortType,
  setSortType,
  tokenSearchId,
  setTokenSearchId,
  refetch,
}: Props): JSX.Element => {
  const { projectSlug, currentSupply, maxSupply } = project;

  return (
    <St.Container>
      {/* <St.RightDiv> */}
      <TokenSearch
        project={project}
        tokenId={tokenSearchId}
        setTokenId={setTokenSearchId}
        refetch={refetch}
      />

      <St.SortDiv>
        {/* <St.SortText>Sort by:</St.SortText> */}
        <St.TextButton
          className={
            (sortType === 'tokenId' ? '' : 'inactive') + ' special-artist-name'
          }
          onClick={() => {
            if (sortType === 'worldLevel') setSortDir('asc');
            setSortType('tokenId');
          }}
        >
          ID
        </St.TextButton>

        {usesTransfers && (
          <>
            <St.SubtleText className="special-artist-name">|</St.SubtleText>
            <St.TextButton
              className={
                (sortType === 'worldLevel' ? '' : 'inactive') +
                ' special-artist-name'
              }
              onClick={() => {
                if (sortType === 'tokenId') setSortDir('desc');
                setSortType('worldLevel');
              }}
            >
              {projectSlug === 'chainlife' ||
              projectSlug === 'chainlife-testnet'
                ? 'World Level'
                : 'Transfers'}
            </St.TextButton>
          </>
        )}

        <St.SortButton>
          {sortDir === 'asc' ? (
            <St.SortIconAsc
              className="icon"
              onClick={() => setSortDir('desc')}
            />
          ) : (
            <St.SortIconDesc
              className="icon"
              onClick={() => setSortDir('asc')}
            />
          )}
        </St.SortButton>
      </St.SortDiv>
      {/* </St.RightDiv> */}
    </St.Container>
  );
};

export default TokenMenu;
