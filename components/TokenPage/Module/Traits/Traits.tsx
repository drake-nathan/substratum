import React from 'react';
import type { IAttribute } from 'services/azureApi/types';
import { Tooltip } from 'react-tooltip';
import * as St from './Traits.styled';

interface Props {
  traits: IAttribute[];
}

const Traits: React.FC<Props> = ({ traits }) => {
  const maxTraitLength = 22;

  const shortenTrait = (trait: string) => {
    if (trait.length > maxTraitLength) {
      return trait.slice(0, maxTraitLength) + '...';
    }
    return trait;
  };

  return (
    <St.Container>
      <St.Title>Traits</St.Title>
      <St.Table>
        {traits.map((trait) => {
          const { trait_type: name, value } = trait;
          const processedValue = typeof value === 'string' ? shortenTrait(value) : value;
          const isTraitShortened =
            typeof value === 'string' && value.length > maxTraitLength;
          const isLink = typeof value === 'string' && value.includes('http');

          return (
            <St.Row key={name}>
              <St.Name>{name}</St.Name>
              {isLink ? (
                <a id={name} href={value} target="_blank" rel="noreferrer">
                  <St.Value>{processedValue}</St.Value>
                </a>
              ) : (
                <St.Value id={name}>{processedValue}</St.Value>
              )}
              {/* {isTraitShortened && <Tooltip anchorId={name} content={value.toString()} />} */}
            </St.Row>
          );
        })}
      </St.Table>
    </St.Container>
  );
};

export default Traits;
