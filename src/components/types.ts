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
