import { useReadDepositGetAllApprovedAddresses } from "../../wagmi/generated";

export const useAllowlist = () => {
  const { data, error } = useReadDepositGetAllApprovedAddresses();

  if (error) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw error;
  }

  return data;
};
