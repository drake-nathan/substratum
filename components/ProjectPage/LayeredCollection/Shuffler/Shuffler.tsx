import { useState } from 'react';
import * as St from './Shuffler.styled';
import * as actions from './tempShuffleFunctions';

interface Props {
  setViewTokenID: (id: number) => void;
  setDrawOrder: (newOrder: number[]) => void;
  drawOrder: number[];
}

const isInRange = (n: number) => {
  if (n <= 100 && n > 0) {
    return n;
  }
  return n > 100 ? 100 : '';
};

const Shuffler = ({
  setDrawOrder,
  drawOrder,
  setViewTokenID,
}: Props): JSX.Element => {
  const [tokenID, setTokenID] = useState<'' | number>('');

  return (
    <St.ButtonGrid>
      <St.TopAction>
        <St.TopButton
          onClick={() =>
            tokenID && setDrawOrder(actions.topAction(tokenID, drawOrder))
          }
        >
          Top
        </St.TopButton>
        <St.ViewLayer>
          <St.IDInput
            placeholder="TokenID to Top"
            onChange={(e) =>
              setTokenID(isInRange(parseInt(e.target.value, 10)))
            }
            value={tokenID}
            type="number"
            max="100"
            step="1"
          />
          <St.ViewButton onClick={() => tokenID && setViewTokenID(tokenID)}>
            <St.EyeIcon />
          </St.ViewButton>
        </St.ViewLayer>
      </St.TopAction>
      <St.CutButton
        onClick={() => {
          setDrawOrder(actions.cutAction(drawOrder));
        }}
      >
        Cut
      </St.CutButton>
      <St.OverhandButton
        onClick={() => setDrawOrder(actions.overhandAction(drawOrder))}
      >
        Overhand
      </St.OverhandButton>
      <St.FaroButton
        onClick={() => setDrawOrder(actions.faroAction(drawOrder))}
      >
        Faro
      </St.FaroButton>
      <St.WashButton
        onClick={() => setDrawOrder(actions.washAction(drawOrder))}
      >
        Wash
      </St.WashButton>
      <St.ReverseButton
        onClick={() => setDrawOrder(actions.reverseAction(drawOrder))}
      >
        Reverse
      </St.ReverseButton>
    </St.ButtonGrid>
  );
};

export default Shuffler;
