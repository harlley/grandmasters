import { useSuspenseQuery } from "@tanstack/react-query";

export const fetchCountry = async (code: string) => {
  const response = await fetch(
    `https://restcountries.com/v3.1/alpha?codes=${code}&fields=name,flag`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch country");
  }

  const data = await response.json();
  return { name: data[0].name.common, flag: data[0].flag };
};

export const useCountry = (code: string) => {
  return useSuspenseQuery({
    queryKey: ["country", code],
    queryFn: () => fetchCountry(code),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
};
