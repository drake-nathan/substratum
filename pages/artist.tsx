import type { NextPage } from "next";

import Head from "next/head";
import React, { useEffect, useState } from "react";

import ArtistContent from "components/ArtistPage/ArtistContent";
import { ArtistHead } from "components/ArtistPage/ArtistHead";
import { ArtistMain } from "components/ArtistPage/ArtistMain";
import { projects } from "data/projects";

const Artist: NextPage = () => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  const artistAddress = "0xF8d9056db2C2189155bc25A30269dc5dDeD15d46";
  // Find artist info from projects
  // useEffect for future database hookup
  useEffect(() => {
    // Find an entry with matching address
    const thisInfo = projects.find((p) => p.artistAddress === artistAddress);
    if (thisInfo) {
      setName(thisInfo.artist);

      // Would be thisInfo.bio when account is updated
      setBio(
        "a bio for an artist that takes up a bit more space so we know how much room we're really working with in a situation like this.",
      );
    } else {
      setName("Artist doesn't exist");
    }
  }, [artistAddress]);

  return (
    <div className="w-full">
      <Head>
        <title>substratum | {name}</title>
        <meta content="Deposit Testing" name="description" />
      </Head>
      <ArtistHead
        artistAddress={artistAddress}
        artistBio={bio}
        artistName={name}
      />
      <ArtistContent
        artistAddress="0xF8d9056db2C2189155bc25A30269dc5dDeD15d46"
        width={window.innerWidth}
      />
    </div>
  );
};

export default Artist;
