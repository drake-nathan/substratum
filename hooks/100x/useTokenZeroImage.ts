import { useQuery } from "@tanstack/react-query";
import { fetchTokenZeroImage } from "services/nextApiFetches";

export const useTokenZeroImage = (projectSlug: string) => {
  const query = useQuery<string | null, Error>({
    gcTime: Infinity,
    queryFn: () => fetchTokenZeroImage(projectSlug),
    queryKey: ["tokenZeroImage"],
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  return query;
};
