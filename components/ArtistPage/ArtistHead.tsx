interface Props {
  artistAddress: string;
  artistBio: string;
  artistName: string;
}

export const ArtistHead = ({ artistAddress, artistBio, artistName }: Props) => {
  return (
    <div>
      <div className="my-28 ml-24 hidden h-[25svh] w-1/2 items-center gap-10 md:flex">
        <img
          alt=""
          className="h-full self-start rounded md:block md:rounded-none"
          src="/projects/blonks.png"
        ></img>
        <div className="flex size-full flex-col items-start justify-start">
          <div className="mb-8">
            <h1 className="h-fit align-text-top leading-none">{artistName}</h1>
            <p className="text-base font-light italic">
              {artistAddress.slice(0, 5) +
                "..." +
                artistAddress.slice(
                  artistAddress.length - 5,
                  artistAddress.length,
                )}
            </p>
          </div>
          <p className="hidden pr-5 md:block">{artistBio}</p>
        </div>
        <p className="pr-5 md:hidden">{artistBio}</p>
      </div>
      <div className="mx-6 mt-10 flex h-fit flex-col md:hidden">
        <div className="mb-5 flex h-[5svh] gap-5">
          <img
            alt=""
            className="h-full self-start rounded-full md:block md:rounded-none"
            src="/projects/blonks.png"
          ></img>
          <div className="mb-8">
            <h1 className="h-fit align-text-top leading-tight">{artistName}</h1>
            <p className="text-xs font-light italic">
              {artistAddress.slice(0, 5) +
                "..." +
                artistAddress.slice(
                  artistAddress.length - 5,
                  artistAddress.length,
                )}
            </p>
          </div>
        </div>
        <p className="pr-5 md:block">{artistBio}</p>
      </div>
    </div>
  );
};

ArtistHead.defaultProps = {
  artistAddress: "0xF8d9056db2C2189155bc25A30269dc5dDeD15d46",
};
