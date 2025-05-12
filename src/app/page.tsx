import { Suspense } from "react";
import { PlayerList } from "@/components/player-list/player-list";
import { fetchPlayers } from "@/api/fetchPlayers";

export const revalidate = 60;

function LoadingPlayers() {
  // TODO: Add a skeleton loader
  return <p>Loading players...</p>;
}

async function PlayerListData() {
  const players = await fetchPlayers();
  return <PlayerList players={players} />;
}

export default function Home() {
  return (
    <Suspense fallback={<LoadingPlayers />}>
      <PlayerListData />
    </Suspense>
  );
}
