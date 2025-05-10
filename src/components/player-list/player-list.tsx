import { Player } from "../player/player";
import { PlayerListProps } from "./player-list.types";

export const PlayerList = ({ players }: PlayerListProps) => {
  const getColor = (username: string) =>
    players.indexOf(username) % 2 === 0 ? "gm-dark-square" : "gm-light-square";
  return (
    <div>
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
