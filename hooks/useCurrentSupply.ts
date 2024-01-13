import { useQuery } from "@tanstack/react-query";

import { fetchCurrentSupplies } from "services/azureApi/fetches";

export const useCurrentSupply = (projectSlug: string): number | undefined => {
  const { data: currentSupplies } = useQuery<Record<string, number>>({
    queryFn: fetchCurrentSupplies,
    queryKey: ["currentSupplies"],
  });

  return currentSupplies?.[projectSlug];
};
