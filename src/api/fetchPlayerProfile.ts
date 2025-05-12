import { useSuspenseQuery, UseQueryOptions } from "@tanstack/react-query";
import { API_URL, CACHE_TIME } from "./config";
import { Player } from "@/components/types";

export const fetchPlayerProfile = async (username: string): Promise<Player> => {
  const response = await fetch(`${API_URL}/player/${username}`);

  if (!response.ok) {
    throw new Error("Failed to fetch player profile");
  }
  return response.json();
};

export const usePlayerProfile = (
  username: string,
  options?: Omit<UseQueryOptions<Player>, "queryKey" | "queryFn">
) => {
  return useSuspenseQuery<Player>({
    queryKey: ["playerProfile", username],
    queryFn: () => fetchPlayerProfile(username),
    staleTime: CACHE_TIME,
    ...options,
  });
};
