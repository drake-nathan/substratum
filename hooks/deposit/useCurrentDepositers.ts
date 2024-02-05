import { useDepositCurrentDepositorCount } from "../../wagmi/generated";

export const useCurrentDepositers = (): number | undefined => {
  const { data, error } = useDepositCurrentDepositorCount();

  if (error) {
    throw error;
  }

  return data !== undefined ? Number(data) : undefined;
};
