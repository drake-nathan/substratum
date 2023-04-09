import { useState } from 'react';
import * as St from './Shuffler.styled';
import * as actions from './tempShuffleFunctions';

interface Props {
  setDrawOrder: (newOrder: number[]) => void;
  drawOrder: number[];
}

const Shuffler = ({ setDrawOrder, drawOrder }: Props): JSX.Element => {
  const [tokenID, setTokenID] = useState(0);

  const isInRange = (n: number) => {
    if (n <= 100 && n > 0 && n % 1 === 0) {
      return n;
    }
    return n > 100 ? 100 : 1;
  };

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
        <St.IDInput
          placeholder="TokenID to Top"
          onChange={(e) => setTokenID(isInRange(parseInt(e.target.value, 10)))}
          value={tokenID || undefined}
          type="number"
          min="1"
          max="100"
          step="1"
        />
        <St.ViewButton />
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
