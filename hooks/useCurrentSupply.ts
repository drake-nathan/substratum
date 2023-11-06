import { useQuery } from "react-query";
import { fetchCurrentSupplies } from "services/azureApi/fetches";

export const useCurrentSupply = (projectSlug: string): number | undefined => {
  const { data: currentSupplies } = useQuery<Record<string, number>, Error>(
    "currentSupplies",
    fetchCurrentSupplies,
  );

  return currentSupplies?.[projectSlug];
};
