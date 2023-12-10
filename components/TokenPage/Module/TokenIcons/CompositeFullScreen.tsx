import { useTokenZeroImage } from "hooks/100x/useTokenZeroImage";
import { Tooltip } from "react-tooltip";

import * as St from "./TokenIcons.styled";

const CompositeFullScreen = () => {
  const { data } = useTokenZeroImage("100x10x1-a-goerli");

  if (data)
    return (
      <a href={data} target="_blank" rel="noreferrer">
        <St.FullScreenIcon className="icon" id="fullscreen" />

        <Tooltip
          anchorId="fullscreen"
          content="View full screen"
          positionStrategy="fixed"
        />
      </a>
    );
};

export default CompositeFullScreen;
