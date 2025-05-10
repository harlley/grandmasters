export type Piece = "pawn" | "rook" | "knight" | "bishop" | "queen" | "king";

export type Color = "white" | "black";

export type PlayerProps = {
  username: string;
  piece: Piece;
  color: Color;
};
