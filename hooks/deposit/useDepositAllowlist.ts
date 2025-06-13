import { useReadDepositGetAllApprovedAddresses } from "../../wagmi/generated";

export const useAllowlist = () => {
  const { data, error } = useReadDepositGetAllApprovedAddresses();

  if (error) {
    // eslint-disable-next-line @typescript-eslint/only-throw-error
    throw error;
  }

  return data;
};
