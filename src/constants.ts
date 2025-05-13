export const PIECES = [
  "pawn",
  "rook",
  "knight",
  "bishop",
  "queen",
  "king",
] as const;

export const GAMES = [
  {
    id: "chess_blitz",
    name: "Chess Blitz",
  },
  {
    id: "chess_rapid",
    name: "Chess Rapid",
  },
  {
    id: "chess_bullet",
    name: "Chess Bullet",
  },
] as const;
