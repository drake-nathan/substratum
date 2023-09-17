import { z } from "zod";

import { useOneHundredXGetMethodFees } from "../wagmi/generated";

export const useMethodFees = () => {
  const { data, error } = useOneHundredXGetMethodFees();

  if (error) {
    console.error("Error fetching method fees:", error);
  }

  const schema = z.array(z.bigint());

  const methodFees = schema.parse(data ?? []);

  return { methodFees };
};
