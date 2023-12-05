import { useQuery } from "react-query";
import { fetchTokenZeroImage } from "services/nextApiFetches";

export const useTokenZeroImage = (projectSlug: string) => {
  const query = useQuery<string | null, Error>("tokenZeroImage", () =>
    fetchTokenZeroImage(projectSlug),
  );

  return query;
};
