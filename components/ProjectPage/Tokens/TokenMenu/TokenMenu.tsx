import React from 'react';
import TokenSearch from './TokenSearch';
import { IProject } from 'services/azureApi/types';
import * as St from './TokenMenu.styled';

interface Props {
  projectSlug: string;
  sortDir: 'asc' | 'desc';
  setSortDir: React.Dispatch<React.SetStateAction<'asc' | 'desc'>>;
  sortType: 'tokenId' | 'worldLevel';
  setSortType: React.Dispatch<React.SetStateAction<'tokenId' | 'worldLevel'>>;
  tokenSearchId: number | null;
  setTokenSearchId: React.Dispatch<React.SetStateAction<number | null>>;
  refetch: () => void;
}

const TokenMenu: React.FC<Props> = ({
  projectSlug,
  sortDir,
  setSortDir,
  sortType,
  setSortType,
  tokenSearchId,
  setTokenSearchId,
  refetch,
}) => {
  return (
    <St.Container>
      <St.RightDiv>
        <TokenSearch
          tokenId={tokenSearchId}
          setTokenId={setTokenSearchId}
          refetch={refetch}
        />
        <St.SortDiv>
          <St.SortText>Sort by:</St.SortText>
          <St.TextButton
            className={sortType === 'tokenId' ? '' : 'inactive'}
            onClick={() => {
              if (sortType === 'worldLevel') setSortDir('asc');
              setSortType('tokenId');
            }}
          >
            Token ID
          </St.TextButton>
          <St.SubtleText>|</St.SubtleText>
          <St.TextButton
            className={sortType === 'worldLevel' ? '' : 'inactive'}
            onClick={() => {
              if (sortType === 'tokenId') setSortDir('desc');
              setSortType('worldLevel');
            }}
          >
            {projectSlug === 'chainlife' || projectSlug === 'chainlife-testnet'
              ? 'World Level'
              : 'Transfers'}
          </St.TextButton>
          <St.SortButton>
            {sortDir === 'asc' ? (
              <St.SortIconAsc className="icon" onClick={() => setSortDir('desc')} />
            ) : (
              <St.SortIconDesc className="icon" onClick={() => setSortDir('asc')} />
            )}
          </St.SortButton>
        </St.SortDiv>
      </St.RightDiv>
    </St.Container>
  );
};

export default TokenMenu;
