import { useQuery } from "@tanstack/react-query";
import { fetchTokenZeroImage } from "services/azureApi/fetches";

export const useTokenZeroImage = () => {
  const query = useQuery<string | null, Error>({
    gcTime: Infinity,
    queryFn: () => fetchTokenZeroImage(),
    queryKey: ["tokenZeroImage"],
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  return query;
};
