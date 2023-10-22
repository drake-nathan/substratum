import { useRouter } from "next/router";

export const useQueryParam = (
  key: string,
  initialValue: string = "",
): [string, (value: string) => void] => {
  const router = useRouter();

  // Ensure the value is a string
  const getStringValue = (value: string | string[]): string => {
    if (Array.isArray(value)) {
      return value[0]; // or you could join them, or handle differently based on your use case
    }

    return value;
  };

  // Get the current value from the URL params
  const currentValue = getStringValue(router.query[key] ?? initialValue);

  // Function to update the URL param
  const setValue = (value: string) => {
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, [key]: value },
      },
      undefined,
      { shallow: true },
    );
  };

  return [currentValue, setValue];
};
