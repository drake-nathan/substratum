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
      <div className="flex aspect-auto h-fit w-full flex-col items-center overflow-hidden border md:h-[50svh] md:flex-row">
        <img
          alt=""
          className="h-1/2 object-cover md:h-auto md:w-1/2"
          src={imgURL}
        />
        <div className="h-1/2 w-full gap-10 p-5 md:h-auto md:w-1/2 md:p-20">
          <h2 className="mb-5">{titleText}</h2>
          <p>{bodyText}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex aspect-auto h-1/2 w-full flex-col-reverse items-center overflow-hidden border md:h-[50svh] md:flex-row">
        <div className="h-fit w-full gap-10 p-5 md:p-20">
          <h2 className="mb-5">{titleText}</h2>
          <p>{bodyText}</p>
        </div>
        <img
          alt=""
          className="h-1/2 object-cover md:h-auto md:w-1/2"
          src={imgURL}
        />
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
