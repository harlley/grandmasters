import { Suspense } from "react";
import { PlayerList } from "@/components/player-list/player-list";
import { fetchPlayers } from "@/api/fetch-players";
import { SkeletonPlayers } from "@/components/skeleton-players";

export const revalidate = 60;

async function PlayerListData() {
  const players = await fetchPlayers();
  return <PlayerList players={players} />;
}

export default function Home() {
  return (
    <Suspense fallback={<SkeletonPlayers />}>
      <PlayerListData />
    </Suspense>
  );
}
