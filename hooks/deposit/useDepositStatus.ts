import { z } from "zod";

import { useReadDepositGetContractStatus } from "../../wagmi/generated";

const schema = z.tuple([z.boolean(), z.boolean(), z.boolean()]);

type Schema = z.infer<typeof schema>;

export const useDepositStatus = () => {
  const query = useReadDepositGetContractStatus();

  if (query.error) {
    console.error(query.error);
  }

  let parsed: unknown;
  if (query.data) {
    parsed = query.data;
  }

  let validated: Schema | undefined;
  if (query.isFetched) {
    validated = schema.parse(parsed);
  }

  return validated ?
      {
        isDepositCompleted: validated[2],
        isDepositOpen: validated[0] || validated[1],
        isMintPrivate: validated[0],
        isMintPublic: validated[1],
      }
    : {
        isDepositCompleted: false,
        isDepositOpen: false,
        isMintPrivate: false,
        isMintPublic: false,
      };
};
