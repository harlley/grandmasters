import { Player } from "../player/player";
import { PlayerListProps } from "./player-list.types";

export const PlayerList = ({ players }: PlayerListProps) => {
  const getColor = (username: string) =>
    players.indexOf(username) % 2 === 0 ? "gm-dark-square" : "gm-light-square";
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center my-6 sticky top-0 z-10 bg-background py-4">
        Grandmasters
      </h1>
      {players.map((username) => (
        <Player
          key={username}
          username={username}
          piece="pawn"
          color={getColor(username)}
        />
      ))}
    </div>
  );
};
