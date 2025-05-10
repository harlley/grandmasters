import clsx from "clsx";
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

  const isDark = color === "gm-dark-square";

  return (
    <div
      className={clsx("flex items-center gap-2 w-full p-4", {
        "bg-gm-dark-square text-gm-light-square": isDark,
        "bg-gm-light-square text-gm-dark-square": !isDark,
      })}
    >
      <PieceComponent width={32} height={32} />
      {username}
    </div>
  );
};
