import { useReadDepositGetAllApprovedAddresses } from "../../wagmi/generated";

export const useAllowlist = () => {
  const { data, error } = useReadDepositGetAllApprovedAddresses();

  if (error) {
    throw error;
  }

  return data;
};
