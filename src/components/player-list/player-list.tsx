"use client";

import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { Player } from "../player/player";
import { PlayerListProps } from "./player-list.types";
import { PIECES } from "../../constants";

const ROW_HEIGHT = 80;

export const PlayerList = ({ players }: PlayerListProps) => {
  const parentRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    count: players.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => ROW_HEIGHT,
    overscan: 10,
  });

  const getColor = (index: number) =>
    index % 2 === 0 ? "gm-dark-square" : "gm-light-square";

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center my-6 sticky top-0 z-10 bg-background py-4">
        Grandmasters
      </h1>
      <div ref={parentRef} className="h-[80vh] overflow-auto">
        <div
          className="w-full relative"
          style={{ height: `${virtualizer.getTotalSize()}px` }}
        >
          {virtualizer.getVirtualItems().map((virtualRow) => {
            const index = virtualRow.index;
            const username = players[index];
            return (
              <div
                key={username}
                className="absolute top-0 left-0 w-full"
                style={{
                  height: `${virtualRow.size}px`,
                  transform: `translateY(${virtualRow.start}px)`,
                }}
              >
                <Player
                  username={username}
                  piece={PIECES[index % PIECES.length]}
                  color={getColor(index)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
