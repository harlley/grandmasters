import { PlayerListProps } from "./player-list.types";

export const PlayerList = ({ players }: PlayerListProps) => {
  return (
    <div>
      {players.map((username) => (
        <div key={username}>{username}</div>
      ))}
    </div>
  );
};
