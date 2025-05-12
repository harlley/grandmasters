import { useSuspenseQuery, UseQueryOptions } from "@tanstack/react-query";
import { API_URL, CACHE_TIME } from "./config";
import { PlayerStats } from "@/components/types";

export const fetchPlayerStats = async (
  username: string
): Promise<PlayerStats> => {
  const response = await fetch(`${API_URL}/player/${username}/stats`);

  if (!response.ok) {
    throw new Error("Failed to fetch player stats");
  }
  return response.json();
};

export const usePlayerStats = (
  username: string,
  options?: Omit<UseQueryOptions<PlayerStats>, "queryKey" | "queryFn">
) => {
  return useSuspenseQuery<PlayerStats>({
    queryKey: ["playerStats", username],
    queryFn: () => fetchPlayerStats(username),
    staleTime: CACHE_TIME,
    ...options,
  });
};
