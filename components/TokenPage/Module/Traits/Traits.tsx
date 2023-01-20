import React, { useEffect, useState } from 'react';
import type { IAttribute } from 'services/azureApi/types';
import { Tooltip } from 'react-tooltip';
import * as St from './Traits.styled';
import { useWindowSize } from 'hooks/useWindowSize';

interface Props {
  traits: IAttribute[];
}

const Traits: React.FC<Props> = ({ traits }) => {
  const { windowWidth } = useWindowSize();
  const [maxTraitLength, setMaxTraitLength] = useState<number>(22);

  useEffect(() => {
    if (windowWidth > 450) setMaxTraitLength(22);
    else if (windowWidth <= 450 && windowWidth > 400) setMaxTraitLength(20);
    else setMaxTraitLength(18);
  }, [windowWidth]);

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
              {isTraitShortened && (
                <Tooltip
                  anchorId={name}
                  content={value.toString()}
                  positionStrategy="fixed"
                />
              )}
            </St.Row>
          );
        })}
      </St.Table>
    </St.Container>
  );
};

export default Traits;
