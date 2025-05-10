import type { PlayerProps } from "./player.types";

export const Player: React.FC<PlayerProps> = ({ username, piece, color }) => (
  <div className="border p-4 rounded shadow text-lg flex flex-col gap-2">
    <span className="font-bold">Username: {username}</span>
    <span>Piece: {piece}</span>
    <span>Color: {color}</span>
  </div>
);
