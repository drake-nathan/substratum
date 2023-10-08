export const shortenTrait = (trait: string, maxTraitLength: number) => {
  if (trait.length > maxTraitLength) {
    return `${trait.slice(0, maxTraitLength)}...`;
  }
  return trait;
};

// replace '\n' with <br />
export const formatNewLines = (str: string) =>
  str.split("\n").map((subStr) => {
    return (
      <>
        {subStr}
        <br />
      </>
    );
  });
