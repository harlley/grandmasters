import { PIECES, GAMES } from "@/constants";

export type Player = {
  avatar?: string;
  player_id: number;
  url: string;
  name: string;
  username: string;
  followers: number;
  last_online: number;
  joined: number;
  status: string;
  is_streamer: boolean;
  verified: boolean;
  league: string;
  country: string;
};

export type PlayerStats = {
  chess_rapid?: { last: { rating: number }; best?: { rating: number } };
  chess_blitz?: { last: { rating: number }; best?: { rating: number } };
  chess_bullet?: { last: { rating: number }; best?: { rating: number } };
};

export type Piece = (typeof PIECES)[number];

export type GameRecord = {
  win: number;
  loss: number;
  draw: number;
};

export type LastGameStats = {
  rating: number;
  date: number;
  rd: number;
};

export type BestGameStats = {
  rating: number;
  date: number;
  game: string;
};

export type ChessGameStatsData = {
  last: LastGameStats;
  best: BestGameStats;
  record: GameRecord;
};

export type Stats = {
  [key in (typeof GAMES)[number]["id"]]?: ChessGameStatsData;
};
