import { GAMES } from "./constants";

type GameRecord = {
  win: number;
  loss: number;
  draw: number;
};

type LastGameStats = {
  rating: number;
  date: number;
  rd: number;
};

type BestGameStats = {
  rating: number;
  date: number;
  game: string;
};

type ChessGameStatsData = {
  last: LastGameStats;
  best: BestGameStats;
  record: GameRecord;
};

export type GamesData = {
  [key in (typeof GAMES)[number]["id"]]?: ChessGameStatsData;
};

export type StatsTabsProps = {
  games: GamesData;
};
