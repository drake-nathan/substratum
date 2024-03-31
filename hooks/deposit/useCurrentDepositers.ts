import { useReadDepositCurrentDepositorCount } from "../../wagmi/generated";

export const useCurrentDepositers = (): number | undefined => {
  const { data, error } = useReadDepositCurrentDepositorCount();

  if (error) {
    throw error;
  }

  return data !== undefined ? Number(data) : undefined;
};
