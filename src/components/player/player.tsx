"use client";

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
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Profile } from "@/components/profile";
import { useState } from "react";
import { Player as PlayerType } from "@/components/types";

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

  const className = clsx("flex items-center gap-2 w-full p-4 cursor-pointer", {
    "bg-gm-dark-square text-gm-light-square": isDark,
    "bg-gm-light-square text-gm-dark-square": !isDark,
  });

  const [player, setPlayer] = useState<PlayerType | null>(null);

  const onClick = async () => {
    const response = await fetch(
      `https://api.chess.com/pub/player/${username}`
    );
    const data = await response.json();
    setPlayer(data);
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className={className} onClick={onClick}>
          <PieceComponent width={32} height={32} />
          {username}
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{username}</DrawerTitle>
        </DrawerHeader>
        {player ? <Profile player={player} /> : <PlayerSkeleton />}
      </DrawerContent>
    </Drawer>
  );
};

const PlayerSkeleton = () => {
  return (
    <div className="flex items-center gap-2 w-full p-4 cursor-pointer">
      loading...
    </div>
  );
};
