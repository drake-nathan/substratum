import React from "react";

interface Props {
  bodyText: string;
  imgURL: string;
  reverse: boolean;
  titleText: string;
}

export const AboutCard = ({ bodyText, imgURL, reverse, titleText }: Props) => {
  if (!reverse) {
    return (
      <div className="flex w-full flex-col border">
        <img
          alt=""
          className="aspect-video w-full object-cover"
          src={imgURL}
        ></img>
        <div className="flex w-full flex-col justify-around gap-5 p-5 md:my-10 md:flex-row md:items-center">
          <h2 className="md:w-1/5">{titleText}</h2>
          <p className="md:w-3/5">{bodyText}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex w-full flex-col border">
        <div className="flex w-full flex-col justify-around gap-5 p-5 md:my-10 md:flex-row md:items-center">
          <h2 className="md:w-1/5">{titleText}</h2>
          <p className="md:w-3/5">{bodyText}</p>
        </div>
        <img
          alt=""
          className="aspect-video w-full object-cover"
          src={imgURL}
        ></img>
      </div>
    );
  }
};

AboutCard.defaultProps = {
  bodyText: "Lorem Ipsum",
  imgUrl: "substratum/substratum.png",
  reverse: false,
  titleText: "Title",
};
