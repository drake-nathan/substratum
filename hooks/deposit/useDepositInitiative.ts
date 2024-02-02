import type { Address } from "viem";

import { z } from "zod";

import { useDepositGetInitiativeDetails } from "../../wagmi/generated";
import { zodAddress } from "utils/zod";

const schema = z.object({
  artist: zodAddress,
  full_deposit_amount: z.bigint(),
  name: z.string(),
  number_of_deposits_allowed: z.number(),
  platform: zodAddress,
  platform_fee_bps: z.number(),
  token_gate_contract: zodAddress,
  token_gate_deposit: z.bigint(),
});

// convert to object type
interface DepositInitiative {
  artist: Address;
  fullDeposit: bigint;
  name: string;
  numberOfDepositsAllowed: number;
  platform: Address;
  platformFeeBps: number;
  tokenGateContract: Address;
  tokenGateDeposit: bigint;
}

export const useDepositInitiative = (): DepositInitiative | null => {
  const { data, error } = useDepositGetInitiativeDetails();

  if (error) {
    console.error(error);
  }

  let parsed: unknown;
  if (data) {
    parsed = JSON.parse(data);
  }

  const validated = schema.safeParse(parsed);

  return validated.success
    ? {
        artist: validated.data.artist,
        fullDeposit: validated.data.full_deposit_amount,
        name: validated.data.name,
        numberOfDepositsAllowed: validated.data.number_of_deposits_allowed,
        platform: validated.data.platform,
        platformFeeBps: validated.data.platform_fee_bps,
        tokenGateContract: validated.data.token_gate_contract,
        tokenGateDeposit: validated.data.token_gate_deposit,
      }
    : null;
};
