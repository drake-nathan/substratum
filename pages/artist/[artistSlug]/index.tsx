import type { NextPage } from "next";

import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import ArtistContent from "components/ArtistPage/ArtistContent";
import { ArtistHead } from "components/ArtistPage/ArtistHead";
import { projects } from "data/projects";
import { deKebabify } from "utils/helpers";

const Artist: NextPage = () => {
  const { artistSlug } = useRouter().query;

  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [artistAddress, setArtistAddress] = useState<string>();

  //   const artistAddress = "0xF8d9056db2C2189155bc25A30269dc5dDeD15d46";
  // Find artist info from projects
  // useEffect for future database hookup
  useEffect(() => {
    // Find an entry with matching address and pull artist data
    const thisInfo = projects.find((p) => p.artistSlug === artistSlug);
    if (thisInfo) {
      setName(deKebabify(thisInfo.artistSlug));
      setArtistAddress(thisInfo.artistAddress);

      // Would be thisInfo.bio when using data object returned by API
      setBio(
        "A bio for an artist that takes up a bit more space so we know how much room we're really working with in a situation like this.",
      );
    } else {
      setName("Artist doesn't exist");
    }
  }, [artistSlug]);

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
      <ArtistContent artistAddress={artistAddress} width={window.innerWidth} />
    </div>
  );
};

export default Artist;
