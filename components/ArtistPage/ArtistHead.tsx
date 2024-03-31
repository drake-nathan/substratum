import React, { useEffect, useState } from "react";

import { projects } from "data/projects";

interface Props {
  artistAddress: string;
  artistBio: string;
  artistName: string;
}

export const ArtistHead = ({ artistAddress, artistBio, artistName }: Props) => {
  return (
    <div className="my-28 ml-20 flex h-[25svh] w-1/2 items-center gap-10">
      <img
        alt=""
        className="hidden h-full self-start md:block"
        src="projects/enso.jpeg"
      ></img>
      <div className="flex size-full flex-col items-start justify-start">
        <div className="mb-8">
          <h1 className="h-fit align-text-top leading-none">{artistName}</h1>
          <p className="text-sm font-extralight italic">{artistAddress}</p>
        </div>
        <p className="hidden pr-5 md:block">{artistBio}</p>
      </div>
      <p className="pr-5 md:hidden">{artistBio}</p>
    </div>
  );
};

ArtistHead.defaultProps = {
  artistAddress: "0xF8d9056db2C2189155bc25A30269dc5dDeD15d46",
};
