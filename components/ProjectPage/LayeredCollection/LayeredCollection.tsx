import {
  goerliSVG,
  svgStart,
} from "components/staticData/100x10x1A/goerliSVGData";
import { useEffect, useState } from "react";
import * as St from "./LayeredCollection.styled";

interface Props {
  drawOrder: number[];
  viewTokenID: number;
  setViewTokenID: (id: number) => void;
}

const LayeredCollection = ({
  drawOrder,
  viewTokenID,
  setViewTokenID,
}: Props): JSX.Element => {
  const [renderableSVGString, setRenderableSVGString] = useState(
    goerliSVG.join("")
  );

  const [pngData, setPngData] = useState("/projects/100x10x1-a.png");
  const [isLoading, setIsLoading] = useState(false);

  // TODO - point this render response to the data coming from the API instead of the local verison currently in use. I.e., make
  useEffect(() => {
    // match the svg string to the new order of token IDs
    let newSVGString = "";
    drawOrder.forEach((id) => (newSVGString += goerliSVG[id]));
    setRenderableSVGString(newSVGString);
  }, [drawOrder]);

  useEffect(() => {
    if (viewTokenID) {
      const layer = goerliSVG[viewTokenID];
      setRenderableSVGString(layer);
      // reset the svg string to the curent drawOrderafter 5secs
      setTimeout(() => {
        setRenderableSVGString(
          drawOrder.reduce(
            (svgString, tokenID) => svgString + goerliSVG[tokenID],
            ""
          )
        );
        // reset view ID as well
        setViewTokenID(0);
      }, 5000);
    }
  }, [viewTokenID, drawOrder, setViewTokenID]);

  useEffect(() => {
    setIsLoading(true);
    const svgUrl = URL.createObjectURL(
      new Blob([`${svgStart + renderableSVGString}</svg>`], {
        type: "image/svg+xml",
      })
    );
    const svgImage = document.createElement("img");
    const canvas = document.createElement("canvas");
    document.body.appendChild(svgImage);
    svgImage.onload = () => {
      canvas.width = svgImage.clientWidth;
      canvas.height = svgImage.clientHeight;
      const canvasCtx = canvas.getContext("2d");
      canvasCtx?.drawImage(svgImage, 0, 0);
      const imgData = canvas.toDataURL("image/png");
      document.body.removeChild(svgImage);
      setPngData(imgData);
      setIsLoading(false);
    };

    svgImage.src = svgUrl;

    return () => {
      URL.revokeObjectURL(svgUrl);
    };
  }, [renderableSVGString]);

  // TODO - Optimize this rendering method.
  return (
    // <Container
    //   dangerouslySetInnerHTML={{
    //     __html: `${svgStart + renderableSVGString}</svg>`,
    //   }}
    // />
    <St.Container>
      <St.PngImage src={pngData} />
      <St.LoadingScreen className={isLoading ? "loading" : ""}>
        <St.LoadingCircle />
      </St.LoadingScreen>
    </St.Container>
  );
};

export default LayeredCollection;
