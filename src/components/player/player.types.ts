import { PIECES, COLORS } from "./constants";

export type Piece = (typeof PIECES)[number];

export type Color = (typeof COLORS)[number];

export type PlayerProps = {
  username: string;
  piece: Piece;
  color: Color;
};
