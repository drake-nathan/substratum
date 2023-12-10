import { useQuery } from "@tanstack/react-query";
import { fetchTokenZeroImage } from "services/nextApiFetches";

export const useTokenZeroImage = (projectSlug: string) => {
  const query = useQuery<string | null, Error>({
    queryFn: () => fetchTokenZeroImage(projectSlug),
    queryKey: ["tokenZeroImage"],
  });

  return query;
};
