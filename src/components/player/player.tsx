"use client";

import clsx from "clsx";
import React, { useState, Suspense } from "react";
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
import { usePlayerProfile } from "@/api/fetchPlayerProfile";
import { usePlayerStats } from "@/api/fetchPlayerStats";
import { StatsTabs } from "@/components/stats-tabs";
import { GamesData } from "@/components/stats-tabs/stats-tabs.types";
const PIECE_COMPONENTS = {
  pawn: Pawn,
  rook: Rook,
  knight: Knight,
  bishop: Bishop,
  queen: Queen,
  king: King,
} as const;

export const Player = ({ username, piece, color }: PlayerProps) => {
  const PieceComponent = PIECE_COMPONENTS[piece];

  const isDark = color === "gm-dark-square";

  const className = clsx("flex items-center gap-2 w-full p-4 cursor-pointer", {
    "bg-gm-dark-square text-gm-light-square": isDark,
    "bg-gm-light-square text-gm-dark-square": !isDark,
  });

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <div className={className}>
          <PieceComponent width={32} height={32} />
          {username}
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="sr-only">
          <DrawerTitle>{username}</DrawerTitle>
        </DrawerHeader>
        {isOpen && (
          <Suspense fallback={<div>loading...</div>}>
            <PlayerData username={username} />
          </Suspense>
        )}
      </DrawerContent>
    </Drawer>
  );
};

function PlayerData({ username }: { username: string }) {
  const { data: player } = usePlayerProfile(username, {});

  const { data: stats } = usePlayerStats(username, {
    enabled: !!player,
  });

  return player ? (
    <div className="flex flex-col gap-6 p-4 overflow-hidden">
      <Profile player={player} />
      <StatsTabs stats={stats as unknown as GamesData} />
    </div>
  ) : null;
}
