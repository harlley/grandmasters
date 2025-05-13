import { COLORS } from "./constants";
import { Piece } from "@/types";

export type Color = (typeof COLORS)[number];

export type PlayerProps = {
  username: string;
  piece: Piece;
  color: Color;
};
