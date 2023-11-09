export const shortenAddress = (address: string, chars = 4) => {
  const parsed = address ? address.toLowerCase() : "";

  return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`;
};

export const shortenText = (text: string, chars = 20) => {
  if (text.length > chars) {
    return `${text.substring(0, chars)}...`;
  }

  return text;
};

export const shortenEth = (eth: string, length = 3) => {
  return Number(eth).toFixed(length);
};
