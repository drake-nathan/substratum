import { useReadDepositCurrentDepositorCount } from "../../wagmi/generated";

export const useCurrentDepositers = (): number | undefined => {
  const { data, error } = useReadDepositCurrentDepositorCount();

  if (error) {
    // eslint-disable-next-line @typescript-eslint/only-throw-error
    throw error;
  }

  return data !== undefined ? Number(data) : undefined;
};
