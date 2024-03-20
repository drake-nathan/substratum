import React from "react";

interface Props {
  bodyText: string;
  imgURL: string;
  reverse: boolean;
  titleText: string;
}

export const AboutCardTall = ({
  bodyText,
  imgURL,
  reverse,
  titleText,
}: Props) => {
  if (!reverse) {
    return (
      <div className="aspect-[1/2] w-full self-start border">
        <img alt="" className="h-3/4 w-full object-cover" src={imgURL} />
        <div className="flex w-full flex-col gap-5 p-5 md:px-12 md:py-10">
          <h2>{titleText}</h2>
          <p>{bodyText}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="aspect-[1/2] w-full self-start border">
        <div className="flex w-full flex-col gap-5 p-5 md:px-12 md:py-5">
          <h2>{titleText}</h2>
          <p>{bodyText}</p>
        </div>
        <img alt="" className="h-3/4 w-full object-cover" src={imgURL} />
      </div>
    );
  }
};

AboutCardTall.defaultProps = {
  bodyText: "Lorem Ipsum",
  imgURL: "substratum/substratum.png",
  reverse: false,
  titleText: "Title",
};
