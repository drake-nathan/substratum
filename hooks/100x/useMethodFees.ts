import { z } from "zod";

import { useReadOneHundredXGetMethodFees } from "../../wagmi/generated";

export const useMethodFees = () => {
  const { data, error } = useReadOneHundredXGetMethodFees();

  if (error) {
    console.error("Error fetching method fees:", error);
  }

  const schema = z.array(z.bigint());

  const zodResult = schema.safeParse(data);

  return { methodFees: zodResult.success ? zodResult.data : undefined };
};
