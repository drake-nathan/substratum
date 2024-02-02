import type { Address } from "viem";

import { z } from "zod";

import { useDepositGetInitiativeDetails } from "../../wagmi/generated";
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

export const useDepositInitiative = (): DepositInitiative => {
  const { data, error } = useDepositGetInitiativeDetails();

  if (error) {
    console.error(error);
  }

  let parsed: unknown;
  if (data) {
    parsed = JSON.parse(data);
  }

  const validated = schema.parse(parsed);

  return {
    artist: validated.artist,
    fullDeposit: validated.full_deposit_amount,
    name: validated.name,
    numberOfDepositsAllowed: validated.number_of_deposits_allowed,
    platform: validated.platform,
    platformFeeBps: validated.platform_fee_bps,
    tokenGateContract: validated.token_gate_contract,
    tokenGateDepositAmount: validated.token_gate_deposit_amount,
  };
};
