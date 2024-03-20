import React from "react";

interface Props {
  bodyText: string;
  imgURL: string;
  reverse: boolean;
  titleText: string;
}

export const AboutCardWide = ({
  bodyText,
  imgURL,
  reverse,
  titleText,
}: Props) => {
  if (!reverse) {
    return (
      <div className="flex aspect-auto h-[50svh] w-full flex-col items-center overflow-hidden border md:flex-row">
        <img alt="" className="w-1/2 object-cover" src={imgURL} />
        <div className="h-fit w-1/2 gap-10 p-20">
          <h2 className="mb-5">{titleText}</h2>
          <p>{bodyText}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex aspect-auto h-[50svh] w-full flex-col items-center overflow-hidden border md:flex-row">
        <div className="h-fit w-1/2 gap-10 p-20">
          <h2 className="mb-5">{titleText}</h2>
          <p>{bodyText}</p>
        </div>
        <img alt="" className="w-1/2 object-cover" src={imgURL} />
      </div>
    );
  }
};

AboutCardWide.defaultProps = {
  bodyText: "Lorem Ipsum",
  imgURL: "substratum/substratum.png",
  reverse: false,
  titleText: "Title",
};
