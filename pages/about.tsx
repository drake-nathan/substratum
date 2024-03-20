import type { NextPage } from "next";

import Head from "next/head";

import { AboutCard } from "components/AboutCard";
import { AboutCardTall } from "components/AboutCardTall";
import { AboutCardWide } from "components/AboutCardWide";

const DepositTest: NextPage = () => {
  return (
    <div className="flex min-h-[75svh] w-full flex-col items-center px-4">
      <Head>
        <title>substratum | deposit testing</title>
        <meta content="Deposit Testing" name="description" />
      </Head>

      <h1 className="my-28 ml-5 self-start text-xl md:my-52 md:ml-20 md:text-4xl">
        About Substratum
      </h1>
      <hr className="w-screen"></hr>
      <div
        className="flex flex-col items-center justify-around gap-28"
        id="body"
      >
        <div className="mt-20 aspect-video w-4/5 bg-green-100 bg-[url('/projects/zancanGM.png')] bg-cover bg-no-repeat">
          <div className="relative left-1/3  top-[65%] flex w-[45%] flex-col gap-5 border bg-background px-10 py-16 text-foreground md:left-1/2">
            <h2 className="text-xl md:text-4xl">About Substratum</h2>
            <p>
              Welcome to Substratum, the premier NFT platform that brings
              together artists, collectors, and investors from all around the
              world.
            </p>
          </div>
        </div>
        <div className="flex w-4/5 flex-col border">
          <AboutCard
            bodyText="At Substratum, we believe that art is not just a creation, but an
              experience. Our platform is designed to provide a seamless and
              enjoyable experience for anyone who loves art and wants to be a
              part of the NFT revolution."
            imgURL="projects/focus.png"
            titleText="Art as an Experience"
          />
        </div>
        <div className="w-4/5">
          <AboutCardWide
            bodyText="Our mission is to empower artists by providing a platform to
              showcase their work and reach a wider audience. We believe that
              every artist deserves to be recognized for their unique talent and
              creativity, and we strive to make that a reality."
            imgURL="projects/haiku.png"
            titleText="Empowering Artists"
          />
        </div>
        <div className="w-4/5">
          <AboutCardWide
            bodyText="Our mission is to empower artists by providing a platform to
              showcase their work and reach a wider audience. We believe that
              every artist deserves to be recognized for their unique talent and
              creativity, and we strive to make that a reality."
            imgURL="projects/enso.jpeg"
            reverse={true}
            titleText="The Future of Art Collecting"
          />
        </div>
        <div className="flex h-[140svh] w-4/5 justify-around ">
          <div className="w-1/3">
            <AboutCardTall
              bodyText="Our mission is to empower artists by providing a platform to
              showcase their work and reach a wider audience. We believe that
              every artist deserves to be recognized for their unique talent and
              creativity, and we strive to make that a reality."
              imgURL="projects/chainlife.png"
              titleText="innovation and technology"
            />
          </div>
          <div className="w-1/3 self-end">
            <AboutCardTall
              bodyText="At Substratum, our values are at the core of everything we do.
              We believe in promoting creativity, inclusivity, and
              transparency. We strive to create a platform that is accessible
              to everyone, regardless of their background or experience. Our
              commitment to these values drives us to constantly improve and
              innovate, so that we can provide the best possible experience
              for our community."
              imgURL="projects/defocused.png"
              titleText="Our Values"
            />
          </div>
        </div>
        <div className="my-10 flex h-fit w-2/3 flex-col justify-center text-center">
          <h2>Join The Substratum Community</h2>
          <p>
            Whether you're an artist, collector, or investor, we invite you to
            join the Substratum community. By joining our platform, you'll have
            access to a vibrant community of like-minded individuals who share
            your passion for art and NFTs. You'll also have the opportunity to
            showcase your work, discover new artists, and expand your
            collection. We believe that the Substratum community is one of the
            strongest and most supportive in the NFT world, and we're excited to
            welcome you to it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DepositTest;