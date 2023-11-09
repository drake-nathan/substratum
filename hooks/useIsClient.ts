import { useEffect, useState } from "react";

export const useIsClient = (): { isClient: boolean } => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return { isClient };
};
