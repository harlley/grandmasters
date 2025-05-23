import { API_URL } from "./config";

export const fetchPlayers = async (): Promise<string[]> => {
  const response = await fetch(`${API_URL}/titled/GM`);

  if (!response.ok) {
    throw new Error("Failed to fetch players");
  }

  const data = await response.json();

  return data.players;
};
