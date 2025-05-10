import { PlayerList } from "@/components/player-list/player-list";

export default async function Home() {
  const response = await fetch("https://api.chess.com/pub/titled/GM");
  const data = await response.json();
  return <PlayerList players={data.players} />;
}
