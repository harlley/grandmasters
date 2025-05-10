import type { PlayerProps } from "./player.types";
import {
  Pawn,
  Rook,
  Knight,
  Bishop,
  Queen,
  King,
} from "../../components/pieces";

const PIECE_COMPONENTS = {
  pawn: Pawn,
  rook: Rook,
  knight: Knight,
  bishop: Bishop,
  queen: Queen,
  king: King,
} as const;

export const Player: React.FC<PlayerProps> = ({ username, piece, color }) => {
  const PieceComponent = PIECE_COMPONENTS[piece];
  const inverseColor = color === "white" ? "black" : "white";
  const classes = `flex items-center gap-2 bg-${color} text-${inverseColor} p-4`;

  return (
    <div className={classes}>
      <PieceComponent width={32} height={32} />
      {username}
    </div>
  );
};
