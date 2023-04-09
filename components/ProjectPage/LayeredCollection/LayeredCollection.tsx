import styled from 'styled-components';
import {
  goerliSVG,
  svgStart,
} from 'components/staticData/100x10x1A/goerliSVGData';
import { useEffect, useState } from 'react';

interface Props {
  drawOrder: number[];
  viewTokenID: number;
  setViewTokenID: (id: number) => void;
}

const Container = styled.div`
  width: 100%;
`;

const LayeredCollection = ({
  drawOrder,
  viewTokenID,
  setViewTokenID,
}: Props): JSX.Element => {
  const [renderableSVGString, setRenderableSVGString] = useState(
    goerliSVG.join(''),
  );

  // TODO - point this render response to the data coming from the API instead of the local verison currently in use. I.e., make
  useEffect(() => {
    // match the svg string to the new order of token IDs
    let newSVGString = '';
    drawOrder.forEach((id) => (newSVGString += goerliSVG[id]));
    setRenderableSVGString(newSVGString);
  }, [drawOrder]);

  useEffect(() => {
    if (viewTokenID) {
      const layer = goerliSVG[viewTokenID];
      setRenderableSVGString(layer);
      // reset the svg string to the previous value
      setTimeout(() => {
        setRenderableSVGString(
          drawOrder.reduce(
            (svgString, tokenID) => svgString + goerliSVG[tokenID],
            '',
          ),
        );
        // reset view ID as well
        setViewTokenID(0);
      }, 5500);
    }
  }, [viewTokenID, drawOrder, setViewTokenID]);

  // TODO - Optimize this rendering method.
  return (
    <Container
      dangerouslySetInnerHTML={{
        __html: `${svgStart + renderableSVGString}</svg>`,
      }}
    />
  );
};

export default LayeredCollection;
