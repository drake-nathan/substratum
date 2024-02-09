import type { Address } from "viem";

import { z } from "zod";

import { useReadDepositGetInitiativeDetails } from "../../wagmi/generated";
import { zodAddress, zodJsonToBigInt, zodJsonToNumber } from "utils/zod";

const schema = z.object({
  artist: zodAddress,
  full_deposit_amount: zodJsonToBigInt,
  name: z.string(),
  number_of_deposits_allowed: zodJsonToNumber,
  platform: zodAddress,
  platform_fee_bps: zodJsonToNumber,
  token_gate_contract: zodAddress,
  token_gate_deposit_amount: zodJsonToBigInt,
});

type Schema = z.infer<typeof schema>;

interface DepositInitiative {
  artist: Address;
  fullDeposit: bigint;
  name: string;
  numberOfDepositsAllowed: number;
  platform: Address;
  platformFeeBps: number;
  tokenGateContract: Address;
  tokenGateDepositAmount: bigint;
}

export const useDepositInitiative = (): DepositInitiative | null => {
  const query = useReadDepositGetInitiativeDetails();

  if (query.error) {
    console.error(query.error);
  }

  let parsed: unknown;
  if (query.data) {
    parsed = JSON.parse(query.data);
  }

  let validated: Schema | undefined;
  if (query.isFetched) {
    validated = schema.parse(parsed);
  }

  return validated ?
      {
        artist: validated.artist,
        fullDeposit: validated.full_deposit_amount,
        name: validated.name,
        numberOfDepositsAllowed: validated.number_of_deposits_allowed,
        platform: validated.platform,
        platformFeeBps: validated.platform_fee_bps,
        tokenGateContract: validated.token_gate_contract,
        tokenGateDepositAmount: validated.token_gate_deposit_amount,
      }
    : null;
};
